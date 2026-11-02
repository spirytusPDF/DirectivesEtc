import { Component } from '@angular/core';
import { AppDigitsOnly } from '../directives/app-digits-only';
import { ToolTip } from '../directives/tool-tip';

@Component({
  imports: [AppDigitsOnly, ToolTip],
  selector: 'app-directive-examples',
  styleUrl: './directive-examples.css',
  templateUrl: './directive-examples.html',
})
export class DirectiveExamples {}
