import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDigitsOnly]',
})
export class AppDigitsOnly {
  @HostBinding('attr.value')
  @Input()
  myValue: string = '';

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  checkInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.myValue = target.value;
    }
    this.myValue = this.myValue.replace(/[^0-9]/g, '');
    this.el.nativeElement.value = this.myValue;

  }

}
