import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { MaladieService } from 'src/app/services/maladie.service';
import * as listeQuestions from '../../../assets/questions.json';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
    listeQuestions = (listeQuestions as any).default;

    index: number = 0;
    questionActuelle: Question;
    end: boolean = false;

    constructor(public maladie: MaladieService, private router: Router ) { }

    ngOnInit(): void {
        this.maladie.listeSymptomes = [];
        this.maladie.listeCauses = [];
        this.questionActuelle = this.listeQuestions[0];
        console.log(this.listeQuestions.length);
    }

    clickYes(): void {
        if(this.questionActuelle.classe === "symptomes") {
            this.questionActuelle.motsCles.forEach((mot) => {
                this.maladie.listeSymptomes.push(mot);
            });   
        } else {
            this.questionActuelle.motsCles.forEach((mot) => {
                this.maladie.listeCauses.push(mot);
            });  
        }
        this.checkEnd();
    }

    clickNo(): void {
        this.checkEnd();
    }

    checkEnd() {
        if(this.index < this.listeQuestions.length - 1) {
            this.index++;
            this.questionActuelle = this.listeQuestions[this.index];
        } else {
            this.end = true;
            setTimeout(() => {this.router.navigate(['/resultats']);}, 3000) 
        }
    }

}

export interface Question {
    question: string;
    classe: string;
    motsCles: string[];
}

