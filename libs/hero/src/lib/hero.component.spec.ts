import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHeroComponent } from './hero.component';

describe('company hero component', () => {
  let component: CompanyHeroComponent;
  let fixture: ComponentFixture<CompanyHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
