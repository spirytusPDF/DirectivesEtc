import { Component, ViewChild } from '@angular/core';
import { Highlight } from '../highlight';
import { CounterParent } from '../CounterTask/counter-parent/counter-parent';
@Component({
  imports: [Highlight, CounterParent],
  selector: 'app-view-child-examples',
  styleUrl: './view-child-examples.css',
  templateUrl: './view-child-examples.html',
})
export class ViewChildExamples {
  @ViewChild(Highlight) highlightDirective!: Highlight;

  setColor(color: string): void {
    if (this.highlightDirective) {
      (this.highlightDirective as Highlight & 
        { changeHighlight(color: string): void }).changeHighlight(color);
    }
  }
}
