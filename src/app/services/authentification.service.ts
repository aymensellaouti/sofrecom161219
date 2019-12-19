import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_LOGIN_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials): Observable<any> {
    return this.http.post(API_LOGIN_LINK, credentials);
  }
}
