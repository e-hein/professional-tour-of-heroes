import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreExamplesComponent } from './core-examples.component';

describe('company core examples component', () => {
  let component: CoreExamplesComponent;
  let fixture: ComponentFixture<CoreExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
