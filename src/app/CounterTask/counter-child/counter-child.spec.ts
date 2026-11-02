import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterChild } from './counter-child';

describe('CounterChild', () => {
  let component: CounterChild;
  let fixture: ComponentFixture<CounterChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterChild],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
