import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/interfaces/credentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmitting: boolean = false;
  isHasBeenValidated: boolean = false;
  isCredentialsInvalid: boolean = false;
  credentials: Credentials = {email: '', password: ''};
  url: string = '../../../assets/credentials.json';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){ this.buildForm();}

  ngOnInit(): void {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.credentials = json;
      console.log(this.credentials);
    });
  }

  buildForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.isCredentialsInvalid = false;
    if (this.registerForm.invalid) {
      this.isHasBeenValidated = true;
      return;
    }
    this.isSubmitting = true;

    setTimeout(() => {
      if (this.registerForm.value.email.toLowerCase() === this.credentials.email && this.registerForm.value.password.toLowerCase() === this.credentials.password) {
        this.isSubmitting = false;
        this.isCredentialsInvalid = false;
        this.onRedirect();
      } else {
        this.isSubmitting = false;
        this.isCredentialsInvalid = true;
      }
    }, 3000); 
  }

  onRedirect() {
    this.router.navigate(['/evaluacion']);
  }

}