import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-action-panel',
  styleUrl: './action-panel.css',
  templateUrl: './action-panel.html',
})
export class ActionPanel {
  @ContentChild('actionButton') buttonToChange!:ElementRef;

  disable():void {
    this.buttonToChange.nativeElement.style.pointerEvents = 'none';
    this.buttonToChange.nativeElement.style.opacity = 0.5;
  }
  enable():void {
    this.buttonToChange.nativeElement.style.pointerEvents = 'auto';
    this.buttonToChange.nativeElement.style.opacity = 1;
  }

}
