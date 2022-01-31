import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnLoadingProperty]'
})
export class BtnLoadingPropertyDirective implements OnInit {

  textInit: string;
  loading: boolean = false;

  @Input() textInput: string;

  constructor(private elementRef: ElementRef<HTMLButtonElement>,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.textInit = this.elementRef.nativeElement.innerHTML
    this.renderer.setProperty(this.elementRef.nativeElement, 'btn-outline-primary', this.textInput);
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-primary');
  }

  @HostListener('click')
  onClick(){

    console.log('Click Directiva')

    if (!this.loading){
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML',
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`)
    }
    else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.textInit)
    }
    this.loading = !this.loading

  }

}
