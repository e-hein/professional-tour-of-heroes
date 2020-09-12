import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

export function itShouldCreateComponent(componentType: Type<any>): void {
  it(`should create ${componentType.name} without logging errors`, async () => {
    const origConsoleError = console.error;
    const errorSpy = jasmine.createSpy('error').and.callThrough();
    console.error = errorSpy;

    try {
      const fixture = TestBed.createComponent(componentType);
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errorSpy).not.toHaveBeenCalled();
    } finally {
      console.error = origConsoleError;
    }
  });
}
