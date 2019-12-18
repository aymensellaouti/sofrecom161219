import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {TodoComponent} from './todo/todo.component';
import {WordComponent} from './word/word.component';
import {FrontComponent} from './front/front.component';
import {BackComponent} from './back/back.component';
import {AdminitrationComponent} from './adminitration/adminitration.component';
import {ColorComponent} from './color/color.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'blabla', redirectTo: 'cv', pathMatch: 'full'},
  {path: '', component: FrontComponent, children: [
      {
        path: 'cv', children: [
          {path: '', component: CvComponent},
          {path: ':id', component: DetailPersonneComponent},
        ]
      },
      {path: 'todo', component: TodoComponent},
      {path: 'word', component: WordComponent}
    ]},
  {
    path: 'admin', component: BackComponent, children:  [
      {path: 'home', component: AdminitrationComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
