import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnLoadingRender]'
})
export class BtnLoadingRenderDirective  implements OnInit {

  constructor(private elementRef: ElementRef<HTMLButtonElement>,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-primary')
  }

  @HostListener('click')
  onClick(){
    console.log('Click Directiva click')
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'btn-outline-primary')
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-success')
    console.log('Click Directiva mouse enter')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'btn-outline-success')
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-primary')
    console.log('Click Directiva mouse Leave')
  }
}
