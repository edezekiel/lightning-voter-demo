import { Component } from '@angular/core';

// controller: function)

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  // currentIdentity;
  // $location;
  currentIdentity;

  constructor(/*$location, toastr, currentIdentity*/) {
    // this.profile = angular.copy(currentIdentity.currentUser);
    this.currentIdentity = {
      currentUser: { firstName: 'joe', lastName: 'eames' },
    };
  }

  save() {
    // this.currentIdentity.updateUser(this.profile);
    // toastr.success('Profile Saved!');
  }

  cancel() {
    // this.$location.path('/home');
  }
}
