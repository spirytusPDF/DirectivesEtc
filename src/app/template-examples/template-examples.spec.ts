import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateExamples } from './template-examples';

describe('TemplateExamples', () => {
  let component: TemplateExamples;
  let fixture: ComponentFixture<TemplateExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateExamples],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
