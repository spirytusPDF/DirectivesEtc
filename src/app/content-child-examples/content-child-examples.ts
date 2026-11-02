import { Component } from '@angular/core';
import { HighlightContent } from '../highlight-content/highlight-content';
import { ActionPanel } from '../action-panel/action-panel';

@Component({
  imports: [HighlightContent, ActionPanel],
  selector: 'app-content-child-examples',
  styleUrl: './content-child-examples.css',
  templateUrl: './content-child-examples.html',
})
export class ContentChildExamples {}
