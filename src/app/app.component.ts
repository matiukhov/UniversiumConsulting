import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {

  }

  title = 'UniversiumConsulting';

  ngOnInit(): void {
    if (this.auth.isSignIn())
      this.router.navigate(['main/profile'])
    else
      this.router.navigate(['signin'])
  }
}
