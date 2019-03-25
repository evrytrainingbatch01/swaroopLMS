import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appBackgroundHighlighter]'
})
export class BackgroundHighlighterDirective {

  constructor(private e:ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlighter('white')
  }
    highlighter(color){
  this.e.nativeElement.style.color=color;
  this.e.nativeElement.style.backgroundColor="purple"
    }
  @HostListener('mouseleave') onmouseleave(){
    this.e.nativeElement.style.color='black';
  this.e.nativeElement.style.backgroundColor="white"
  }

}
