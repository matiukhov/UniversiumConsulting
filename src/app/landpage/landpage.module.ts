import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandpageComponent } from './landpage.component';
import { ProfileComponent } from '../profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LandpageComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LandpageComponent, children: [{ path: 'profile', component: ProfileComponent }] }
    ]),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LandpageModule { }
