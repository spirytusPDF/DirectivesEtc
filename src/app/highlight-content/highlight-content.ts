import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-highlight-content',
  styleUrl: './highlight-content.css',
  templateUrl: './highlight-content.html',
})
export class HighlightContent {
  @ContentChild('description') descriptionElement!: ElementRef;
  
  addStyle():void {
    this.descriptionElement.nativeElement.style.color = 'pink';
  }

  resetStyle():void{
    this.descriptionElement.nativeElement.style.color = '';
  }
}
