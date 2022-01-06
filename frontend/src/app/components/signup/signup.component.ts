import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  showError: boolean;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'nom': new FormControl('', Validators.required),
      'prenom': new FormControl('', Validators.required),
      'telephone': new FormControl('', Validators.required),
      'adresse': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  signup(): void {

  }

}
