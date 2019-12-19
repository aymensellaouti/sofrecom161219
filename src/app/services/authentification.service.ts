import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
const API_LOGIN_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(credentials): Observable<any> {
    return this.http.post(API_LOGIN_LINK, credentials);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
