import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  emabuaches: Personne[] = [];
  constructor() { }
  getEmbauchees(): Personne[] {
    return this.emabuaches;
  }
  embaucher(personne: Personne) {
    const index = this.emabuaches.indexOf(personne);
    if (index === -1 ) {
      this.emabuaches.push(personne);
    } else {
      alert(`${personne.name} est déjà pré selectionnée`);
    }
  }
}
