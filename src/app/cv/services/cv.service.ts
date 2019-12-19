import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  private selectedPersonne = new Subject<Personne>();
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 37),
      new Personne(2, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', 123456, 37),
      new Personne(2, 'sellaouti', 'aymen', 'teacher', '            ', 123456, 37)
    ];
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  getSelectedPersonne() {
    return this.selectedPersonne;
  }
  findPersonneById(id): Personne {
    return this.personnes.find( (personne) => personne.id === +id);
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne.next(personne);
  }
}
