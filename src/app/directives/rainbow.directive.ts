import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.backgroundColor') bg;

  constructor() {
  }

  @HostListener('keyup') changeColor() {
    const couleur = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bc = couleur;
    this.color = couleur;
  }
  @HostListener('click') changeBgColor() {
    this.bg = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
