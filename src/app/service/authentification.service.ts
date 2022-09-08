import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

   constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }
  public getFirstName():any{
    return JSON.parse(localStorage.getItem('FirstName') ||'{}');
    }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public setEmail(email: string) {
    localStorage.setItem('email', email);
  }
  public getToken(): any {
    return localStorage.getItem('jwtToken');
  }
  public getEmail(): any {
    return localStorage.getItem('email') ;
  }


  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
