import { Component, OnInit } from '@angular/core';
import * as specialities from '../../../assets/Specialities/specialities.json';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {

  url = "../../../assets/Specialities/";
  specialities: Specialite[] = (specialities as any).default;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(specialitiy: Specialite): string {
    return this.url + specialitiy.img;
  }

}

export interface Specialite {
  nom: string;
  desc: string;
  img: string;
}