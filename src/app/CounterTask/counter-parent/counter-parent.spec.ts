import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterParent } from './counter-parent';

describe('CounterParent', () => {
  let component: CounterParent;
  let fixture: ComponentFixture<CounterParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterParent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
