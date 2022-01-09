import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faSkype = faSkype;
  faLinkedin = faLinkedin;

  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
