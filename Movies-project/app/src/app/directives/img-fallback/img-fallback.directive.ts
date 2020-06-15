import {Directive, Input, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]',
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string;

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('error')
  loadFallBackImageOnError(): void {
    const element: HTMLImageElement = <HTMLImageElement>(
      this._elementRef.nativeElement
    );
    element.src = this.appImgFallback || 'assets/no-poster.jpg';
  }
}
