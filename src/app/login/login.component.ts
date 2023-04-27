import { UserAuthService } from './../_services/user-auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response);

        this.userAuthService.setToken(response.token);

        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log(error);
        if (error.status === 403) {
          this.router.navigate(['/forbidden']);
        }
      }
    );
  }
}
