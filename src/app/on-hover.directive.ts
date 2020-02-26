import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[webOnHover]'
})
export class OnHoverDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
