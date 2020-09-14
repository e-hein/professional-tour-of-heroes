import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroEditorComponent } from './hero-editor.component';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HeroEditorComponentHarness } from '@company/hero/testing';
import { MatInputHarness } from '@angular/material/input/testing';

describe('company hero editor component', () => {
  let component: HeroEditorComponent;
  let fixture: ComponentFixture<HeroEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeroEditorComponent ]
    })
    .compileComponents();
  }));

  async function startComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeroEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  }

  it('should create without throwing errors', async () => {
    const origConsoleError = console.error;
    const errorSpy = jasmine.createSpy('error').and.callThrough();
    console.error = errorSpy;

    try {
      await startComponent();
    } finally {
      console.error = origConsoleError;
    }

    expect(errorSpy).not.toHaveBeenCalled();
  });

  describe('started', () => {
    let heroEditor: HeroEditorComponentHarness;

    beforeEach(async () => {
      await startComponent();
      heroEditor = await TestbedHarnessEnvironment.harnessForFixture(fixture, HeroEditorComponentHarness);
    });

    describe('initially', () => {
      it('should show title with hero name in uppercase', () => {
        expect(heroEditor.getTitleText()).toContain(component.hero.name.toUpperCase());
      });

      it('should show hero id', () => {
        expect(heroEditor.getHeroId()).toBe(component.hero.id);
      });

      it('should show input for hero name', () => {
        expect(heroEditor.getNameInput().getValue()).toBe(component.hero.name);
      });
    });

    describe('change hero name', () => {
      const updatedHeroName = 'Fireblaster';
      let nameInput: MatInputHarness;

      beforeEach(async () => {
        nameInput = await heroEditor.getNameInput();
      });

      describe(`to '${updatedHeroName}'`, () => {
        beforeEach(() => nameInput.setValue(updatedHeroName));

        it('should set hero name', () => {
          expect(component.hero.name).toBe(updatedHeroName);
        });

        it('should update title', () => {
          expect(heroEditor.getTitleText()).toContain(updatedHeroName.toUpperCase());
        });
      });

      it('to empty value should not throw', async () => {
        try {
          await nameInput.setValue(null);
          expect().nothing(); // not to have thrown
        } catch (e) {
          fail('did throw');
        }
      });
    });
  });
});

export class HeroEditorNameRemote {
  static findIn(fixture: ComponentFixture<any>, parentElement = fixture.debugElement): HeroEditorNameRemote {
    const debugElement = parentElement.query(By.css('input[placeholder=name]'));
    if (!debugElement) {
      throw new Error('hero editor not found');
    }
    return new HeroEditorNameRemote(fixture, debugElement);
  }

  constructor(
    private fixture: ComponentFixture<any>,
    private debugElement = fixture.debugElement,
  ) {}

  getInput(): HTMLInputElement {
    return this.debugElement.nativeElement;
  }

  getValue(): string | null {
    const value = this.getInput().value;
    return typeof value === 'string' ? value : null;
  }

  setValue(value: string | null): Promise<void> {
    const input = this.getInput();
    input.value = value;
    input.dispatchEvent(new Event('input'));
    this.fixture.detectChanges();
    return this.fixture.whenStable();
  }
}

export class HeroEditorRemote {
  static findIn(fixture: ComponentFixture<any>, parentElement = fixture.debugElement): HeroEditorRemote {
    const debugElement = parentElement.query(By.directive(HeroEditorComponent));
    if (!debugElement) {
      throw new Error('hero editor not found');
    }
    return new HeroEditorRemote(fixture, debugElement);
  }

  constructor(
    private fixture: ComponentFixture<any>,
    private debugElement = fixture.debugElement,
  ) {}

  getTitle(): HTMLHeadingElement {
    const title = this.debugElement.query(By.css('h2'));
    if (!title) {
      throw new Error('no title found');
    }
    return title.nativeElement;
  }

  getTitleText(): string {
    return this.getTitle().textContent;
  }

  getHeroId(): number | null {
    const heroIdSpan: HTMLSpanElement = this.debugElement.query(By.css('.hero-id')).nativeElement;
    const heroIdText = heroIdSpan.textContent.trim();
    const heroId = parseInt(heroIdText, 10);
    return isNaN(heroId) ? null : heroId;
  }

  getNameInput(): HeroEditorNameRemote {
    return HeroEditorNameRemote.findIn(this.fixture, this.debugElement);
  }
}
