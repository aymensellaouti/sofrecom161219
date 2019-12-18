import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 37),
      new Personne(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', 123456, 37),
      new Personne(2, 'sellaouti', 'aymen', 'teacher', '            ', 123456, 37)
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
