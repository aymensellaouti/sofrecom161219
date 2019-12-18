import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (donnes) => {
        const personne = this.cvService.findPersonneById(donnes.id);
        if (personne) {
          this.personne = personne;
        } else {
          this.router.navigate(['cv']);
        }
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => console.log(qp)
    );
  }

}
