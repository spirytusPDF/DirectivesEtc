import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTip {
  @HostBinding('attr.title') 
  @Input('appToolTip') tipText: string = '';
}
