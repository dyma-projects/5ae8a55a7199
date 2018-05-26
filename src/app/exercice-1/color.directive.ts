import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {
  constructor(private   el: ElementRef) {
  }

  @HostListener('window:keyup', ['$event']) windowKeyUp($event) {
    const key = $event.key;

    if (key === 'ArrowDown') {
      this.colorText('orange');
    } else if (key === 'ArrowUp') {
      this.colorText('lightgrey');
    } else if (key === 'ArrowLeft') {
      this.colorText('red');
    } else if (key === 'ArrowRight') {
      this.colorText('pink');
    }
  }

  private colorText(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
