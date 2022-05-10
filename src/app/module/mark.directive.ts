import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMark]',
})
export class MarkDirective {
  // creazione direttiva evidenzia
  constructor(private ref: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.ref.nativeElement, 'background', 'yellow');
    this.render.setStyle(this.ref.nativeElement, 'color', 'black');
  }
}
