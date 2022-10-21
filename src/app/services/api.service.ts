import { Injectable } from '@angular/core';
import { Phonetypes } from '../data/phonetypes';
import { Profile } from '../data/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getProfile(): Profile {
    return {
      address: '5905 Wilshire Blvd, Los Angeles, CA 90036, United States',
      email: 'a.matiukhov@gmail.com',
      firstName: 'Olexandr',
      job: 'Super job',
      lastName: 'Matiukhov',
      phones:
        [{ type: Phonetypes.Home, number: '1234567890' },
        { type: Phonetypes.Work, number: '0987654321' }],
        brands:['github', 'instagram', 'facebook', 'twitter']
    };
  }
}
