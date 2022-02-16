import { Component, Inject } from '@angular/core';
import { Toastr, TOASTR_TOKEN } from '../toastr/toastr.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  /* 
    By passing in the '$location' token Angular will look up 
    the dependency registered with that token and give it back
    to us in that private $location property
  */
  constructor(
    @Inject('$location') private $location,
    @Inject('currentIdentity') public currentIdentity,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  save(newProfile) {
    this.currentIdentity.updateUser(newProfile);
    this.toastr.success('Profile Saved!');
  }

  cancel() {
    this.$location.path('/home');
  }
}
