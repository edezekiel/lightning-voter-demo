import { Component, Inject } from '@angular/core';

// controller: function)

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  currentIdentity;

  /* 
    By passing in the '$location' token Angular will look up 
    the dependency registered with that token and give it back
    to us in that private $location property
  */
  constructor(@Inject('$location') private $location/*toastr*/) {
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
    this.$location.path('/home');
  }
}
