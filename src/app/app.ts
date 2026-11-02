import { Component, signal } from '@angular/core';
import { DirectiveExamples } from './directive-examples/directive-examples';
import { TemplateExamples } from './template-examples/template-examples';
import { CounterParent } from './CounterTask/counter-parent/counter-parent';
import { ViewChildExamples } from './view-child-examples/view-child-examples';
import { ContentChildExamples } from './content-child-examples/content-child-examples';

@Component({
  imports: [DirectiveExamples, TemplateExamples, CounterParent, ViewChildExamples, ContentChildExamples],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}
