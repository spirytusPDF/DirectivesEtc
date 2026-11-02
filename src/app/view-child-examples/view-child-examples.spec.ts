import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewChildExamples } from './view-child-examples';

describe('ViewChildExamples', () => {
  let component: ViewChildExamples;
  let fixture: ComponentFixture<ViewChildExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildExamples],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
