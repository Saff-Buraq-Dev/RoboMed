import { Injectable } from '@angular/core';
import { Maladie } from './maladie.service';
import * as personne from '../../assets/personnes.json';

@Injectable({
    providedIn: 'root'
})
export class PersonsService {
    imgUrl = '../../assets/Personnes/';
    defaultImg = 'default.png';
    personne: Personne = (personne as any).default[0];

    constructor() { }

    getAge(): string {
        let date = new Date(this.personne.dob);
        let diff = Date.now() - date.getTime();
        let _age = new Date(diff);
        let age = Math.abs(_age.getUTCFullYear() - 1970);
        let suffixe = (age > 1) ? " ans" : " an";
        return age.toString() + suffixe;
    }

    getImgUrl(): string {
        if(this.personne.img === "") {
            return this.imgUrl + this.defaultImg;
        }
        return this.imgUrl + this.personne.img;
    }

    getFullName(): string {
        return this.personne.prenom + " " + this.personne.nom;
    }

    getTaille(): string {
        return this.personne.taille.toString() + "cm";
    }

    getPoids(): string {
        return this.personne.poids.toString() + " kg";
    }

    getSmokeStatus(): string {
        if(this.personne.fumeur) {
            return "Oui";
        } else {
            return "Non";
        }
    }
}

export interface Personne {
    nom: string;
    prenom: string;
    dob: string;
    adresse: string;
    taille: number;
    poids: number;
    img: string;
    antecedents?: Maladie[];
    fumeur?: boolean;
}