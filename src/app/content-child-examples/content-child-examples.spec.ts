import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentChildExamples } from './content-child-examples';

describe('ContentChildExamples', () => {
  let component: ContentChildExamples;
  let fixture: ComponentFixture<ContentChildExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildExamples],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentChildExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
