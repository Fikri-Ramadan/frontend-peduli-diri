import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  firstname: string = 'Guest';

  constructor(private userService: UserService, private userAuthService: UserAuthService) {
      if (userAuthService.isLoggedIn()) {
        this.userService.getCredential().subscribe(
          (response: any) => {
            console.log(response);
            this.firstname = response;
          }
        );
      }
  }

}
