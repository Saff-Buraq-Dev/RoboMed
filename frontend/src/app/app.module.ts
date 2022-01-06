import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HeroComponent } from './components/hero/hero.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConfidentialityComponent } from './components/confidentiality/confidentiality.component';
import { ResumeComponent } from './components/resume/resume.component';
import { StepsComponent } from './components/steps/steps.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { ResultatInfoComponent } from './components/resultat-info/resultat-info.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
    ScrollTopComponent,
    HeroComponent,
    PartnersComponent,
    AccueilComponent,
    ConfidentialityComponent,
    ResumeComponent,
    StepsComponent,
    SignupComponent,
    LoginComponent,
    SurveyComponent,
    SpecialitiesComponent,
    ResultatsComponent,
    PersonInfoComponent,
    ResultatInfoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWLLYaMpBDERRGlKr-Cxe9x-RVvG3HBH4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
