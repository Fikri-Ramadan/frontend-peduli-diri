import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
        return true
    }
    return false;
  }

}
