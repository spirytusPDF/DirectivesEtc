import { Component, ViewChild } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  imports: [Highlight],
  selector: 'app-template-examples',
  styleUrl: './template-examples.css',
  templateUrl: './template-examples.html',
})
export class TemplateExamples {
  isPasswordVisible?:boolean;
  toggleVisibility(){this.isPasswordVisible = !this.isPasswordVisible}

  passLength?:number;
  checkLength(value:string){this.passLength = value.length;}

  
}
