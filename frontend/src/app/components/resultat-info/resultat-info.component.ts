import { Component, OnInit } from '@angular/core';
import { MaladieService } from 'src/app/services/maladie.service';

@Component({
  selector: 'app-resultat-info',
  templateUrl: './resultat-info.component.html',
  styleUrls: ['./resultat-info.component.css']
})
export class ResultatInfoComponent implements OnInit {

  constructor(private maladie: MaladieService) { }

  ngOnInit(): void {
    this.maladie.chercherMaladie();
    console.log(this.maladie.maladiesSuspectees);
  }

}
