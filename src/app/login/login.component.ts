import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );
  }
}
