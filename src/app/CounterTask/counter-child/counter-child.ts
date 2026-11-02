import { Component, numberAttribute, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-child',
  styleUrl: './counter-child.css',
  templateUrl: './counter-child.html',
})
export class CounterChild {
  count = signal<number>(0);

  increment():void{
    this.count.update(v=>v+1);
    console.log(this.count());
    
  }
  decrement():void{
     this.count.update(v=>v-1);
    console.log(this.count());
  }
  reset():void{
     this.count.update(v=>v=0);
    console.log(this.count());
  }
}
