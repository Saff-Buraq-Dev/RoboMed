import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 45.5420381;
  lng = -73.6494886;
  
  constructor() { }

  ngOnInit(): void {
  }

}
