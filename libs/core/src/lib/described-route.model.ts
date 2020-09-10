import { Route } from '@angular/router';

export interface DescribedRoute extends Route {
  readonly title?: string;
  readonly description?: string;
  readonly children?: DescribedRoute[];
}
