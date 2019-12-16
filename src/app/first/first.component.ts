import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isHidden = false;
  message = 'hide';
  constructor() { }
  ngOnInit() {
  }
  showHide() {
    this.isHidden = !this.isHidden;
    (this.message === 'hide') ? this.message = 'show' : this.message = 'hide';
  }

}
