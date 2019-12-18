import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {
  path: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  naviguer() {
    console.log(this.path);
    const LINK = [this.path];
    this.router.navigate(LINK);
  }
}
