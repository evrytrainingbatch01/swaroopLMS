import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightheader]'
})
export class HighlightheaderDirective {

  constructor(private e:ElementRef) { 
    e.nativeElement.style.color='white';
    e.nativeElement.style.backgroundColor='rgb(131, 66, 5)';
  }

}
