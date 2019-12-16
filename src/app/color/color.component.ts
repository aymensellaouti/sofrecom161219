import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red'
  couleur: string;
  constructor() {}

  ngOnInit() {
    this.couleur = this.defaultColor;
  }

  changeColor(color: string) {
    this.couleur = color;
  }

  resetColor() {
    this.couleur = this.defaultColor;
  }
}
