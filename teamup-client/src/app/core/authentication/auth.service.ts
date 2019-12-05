import { Injectable } from '@angular/core';
import { UserLogin } from '../../shared/models/userLogin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from 'q';



/**
 * This is the authentication service. It handles everything related to permission and token management
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  /**
   * This function logs in users and handles eventual errors.
   * @param user that is going to be logged in
   */
  public login(user: UserLogin) {
    this.http.post<any>('http://localhost:1212/authenticate', user).subscribe(async (data) => {
      localStorage.setItem('token', 'Bearer ' + data.jwtToken);
      localStorage.setItem('username', user.username);
      this.router.navigate(['home']);
    });
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


}


