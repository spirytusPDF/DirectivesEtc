import { Component, ViewChild } from '@angular/core';
import { CounterChild } from '../counter-child/counter-child';

@Component({
  imports: [CounterChild],
  selector: 'app-counter-parent',
  styleUrl: './counter-parent.css',
  templateUrl: './counter-parent.html',
})
export class CounterParent {
 @ViewChild(CounterChild) counterComp!:CounterChild;

 increase():void{
  this.counterComp.increment();
 }
 decrease():void{
  this.counterComp.decrement();
 }
 reset():void{
  this.counterComp.reset();
 }
 setCountValue(value: number): void {
    this.counterComp.count.update(v=>v=value);
  }
}
