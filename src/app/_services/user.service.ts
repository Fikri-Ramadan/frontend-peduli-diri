import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080/api/v1';
  requestHeader = new HttpHeaders({ 'No-Auth': 'true' });

  constructor(
    private http: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.http.post(this.PATH_OF_API + '/auth/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public getCredential() {
    // const jwtToken = this.userAuthService.getToken();
    // var headers_object = new HttpHeaders({
    //   authorization: 'bearer ' + jwtToken,
    // });

    // const httpOptions = {
    //   headers: headers_object
    // };

    return this.http.get(this.PATH_OF_API + '/demo-controller/firstname', {responseType: 'text'});
  }
}
