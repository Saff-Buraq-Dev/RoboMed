import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path : 'specialites', component : SpecialitiesComponent },
  { path : 'questions', component : SurveyComponent },
  { path : 'resultats', component : ResultatsComponent },
  { path : 'contact', component : ContactComponent },
  { path : '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
