import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCoreComponent } from './core.component';

describe('company core component', () => {
  let component: CompanyCoreComponent;
  let fixture: ComponentFixture<CompanyCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
