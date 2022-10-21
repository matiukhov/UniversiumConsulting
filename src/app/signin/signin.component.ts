import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
    });
  }

  form: FormGroup;

  ngOnInit(): void {
  }

  signin() {
    if (this.auth.signIn({ login: this.form.value.login, password: this.form.value.password })) {
      this.router.navigate(['main/profile']);
    } else
      alert('incorrect login or password.\nLogin: login\nPassword: 123');
      this.form.reset();
  }
}
