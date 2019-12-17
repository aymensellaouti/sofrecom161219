import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', 123456, 37),
      new Personne(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', 123456, 37)
    ];
  }

  onSelectPersonne(personne: Personne) {
    this.forwardPersonne.emit(personne);
  }
}
