import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../toastr/toastr.service';
import { Auth } from './auth.service';
import { CurrentIdentity } from './currentIdentity.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnChanges {
  email;
  
  constructor(
    private currentIdentity: CurrentIdentity, 
    private auth: Auth, 
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router )
  {
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.currentIdentity.authenticated()) {
      this.router.navigate(['/admin/results']);
    }
  }
    
  login(newForm) {
      this.auth.login({
        username: newForm.email,
        password: "pass"
      }).then(() => {
        this.router.navigate(['/admin/results']);
      }, (err) => {
        this.toastr.error(err);
      })
    }
}