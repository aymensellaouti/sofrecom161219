import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => this.personnes = personnes,
      (error) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert('Pbm with API connexion, dta are Fake');
      }
    );
  }

  onSelectPersonne(personne: Personne) {
    this.forwardPersonne.emit(personne);
  }
}
