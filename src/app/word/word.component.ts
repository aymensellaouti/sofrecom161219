import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  color = 'red';
  size = 40;
  font = 'times new roman';

  constructor() { }

  ngOnInit() {
  }

}
