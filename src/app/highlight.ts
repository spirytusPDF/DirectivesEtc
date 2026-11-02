import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  constructor(private el:ElementRef){}

  public changeHighlight(color: string): void{
      this.el.nativeElement.style.backgroundColor = color;
  }
}
