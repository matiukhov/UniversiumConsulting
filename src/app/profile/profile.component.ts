import { Component, OnInit } from '@angular/core';
import { Profile } from '../data/profile';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api: ApiService) {
    this.profile = this.api.getProfile()
  }

  profile: Profile;

  ngOnInit(): void {
  }
}
