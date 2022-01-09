import { Injectable } from '@angular/core';
import * as listeMaladies from '../../assets/maladies.json'


@Injectable({
    providedIn: 'root'
})
export class MaladieService {

    listeMaladies = (listeMaladies as any).default;
    maladiesSuspectees: Maladie[] = [];
    listeCauses: string[] = [];
    listeSymptomes: string[] = [];
    consulter: boolean = false;

    constructor() { }

    chercherMaladie(): void {
        this.listeMaladies.forEach((maladie) => {
            let causesCommuns = 0;
            let symptomesCommuns = 0;
            this.listeCauses.forEach((cause) => {
                maladie.causes.forEach((c) => {
                    if(c === cause) causesCommuns++;
                });
            });
            this.listeSymptomes.forEach((symptome) => {
                maladie.symptomes.forEach((s) => {
                    if(s === symptome) symptomesCommuns++;
                })
                maladie.consultation.forEach((cons) => {
                    if(cons === symptome) this.consulter = true;
                });
            });
            let quoteCauses = ((causesCommuns / maladie.causes.length) * 100);
            let quoteSymptomes = ((symptomesCommuns / maladie.symptomes.length) * 100);
            let quote = (quoteCauses * 0.2) + (quoteSymptomes * 0.8);
            if(quote > 60) this.maladiesSuspectees.push(maladie);
            if(maladie.nom === "Bronchite") console.log(quote);
        });
    }


}

export interface Maladie {
    nom: string;
    desc: string;
    causes?: string[];
    consultation?: string[];
    symptomes: string[];
    examensCompl?: string[];
    traitement?: string[];
    prevention?: string[];
    diagnosticDiff?: string[];
}
