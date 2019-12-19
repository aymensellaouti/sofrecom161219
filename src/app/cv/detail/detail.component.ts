import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {EmbaucheService} from '../services/embauche.service';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService
  ) { }
  ngOnInit() {
    this.cvService.getSelectedPersonne().subscribe(
      (personne) => this.personne = personne
    );
  }
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
}
