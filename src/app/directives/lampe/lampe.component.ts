import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent implements OnInit {
  isAllume = false;
  constructor() { }

  ngOnInit() {
  }

  allumeEteint() {
    this.isAllume = !this.isAllume;
  }
}
