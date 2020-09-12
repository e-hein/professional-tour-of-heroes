import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DescribedRoute } from '@company/core';
import { Subscription } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';

interface NavigationRoute {
  path: string[];
  title: string;
  isActive: boolean;
  children?: NavigationRoute[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'demo-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() routes: NavigationRoute[];

  private subscriptions = new Array<Subscription>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.routes) {
      this.subscriptions.push(
        this.router.events.pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          startWith('initial'),
        ).subscribe(() => {
          this.routes = this.analyzeRoutes(this.router.config);
          this.changeDetectorRef.markForCheck();
        }),
      );
    }
  }

  trackByPath: TrackByFunction<NavigationRoute> = (i, route) => route.path.slice().pop();

  private analyzeRoutes(routes: DescribedRoute[], parent = new Array<string>()): NavigationRoute[] {
    const navigationRoutes = routes
      .filter((route): route is DescribedRoute & { path: string } => route.path?.length > 0)
      .map((route) => {
        const path = parent.concat(route.path);
        const title = route.title || ('' + route.path)
          .replace(/[-\/ ]+/g, ' ')
        ;
        const url = path.join('/');
        const isActive = this.router.isActive(url, false);
        const childRoutes = this.getChildren(route);
        const children = childRoutes ? this.analyzeRoutes(childRoutes, path) : undefined;
        return { path, title, isActive, children };
      })
    ;
    return navigationRoutes;
  }

  private getChildren(route: DescribedRoute & { _loadedConfig?: { routes?: DescribedRoute[] }}): DescribedRoute[] | undefined {
    const childRoutes = route.children || route._loadedConfig?.routes;
    return childRoutes && childRoutes.length > 0 ? childRoutes : undefined;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
