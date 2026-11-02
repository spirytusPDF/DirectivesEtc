import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightContent } from './highlight-content';

describe('HighlightContent', () => {
  let component: HighlightContent;
  let fixture: ComponentFixture<HighlightContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightContent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
