import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsVariable = 'Bonjour';
  @Output() sendDataToFather = new EventEmitter();
  message: string;
  constructor() { }

  ngOnInit() {
  }
  sendData() {
    this.sendDataToFather.emit(this.message);
  }
}
