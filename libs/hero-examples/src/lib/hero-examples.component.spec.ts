import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExamplesComponent } from './hero-examples.component';

describe('company hero examples component', () => {
  let component: HeroExamplesComponent;
  let fixture: ComponentFixture<HeroExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
