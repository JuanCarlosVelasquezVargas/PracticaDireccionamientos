import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[btnLoading]'
})
export class BtnLoadingDirective{

  constructor(private elementRef: ElementRef<HTMLButtonElement>) {

    elementRef.nativeElement.className = 'btn btn-outline-primary'
    elementRef.nativeElement.innerHTML = 'modificado desde directiva'

  }

  @HostListener('click')
  onClick(){
    console.log('Click Directiva')
  }
}
