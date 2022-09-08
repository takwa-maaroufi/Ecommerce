import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
API ="http://localhost:8080";

requestHeader = new HttpHeaders(
{ 'No-Auth':'True'}
);
  constructor(private httpclient: HttpClient, private auth:AuthentificationService) { }

  public login(loginData:any){
    return this.httpclient.post(this.API + "/authenticate",loginData,{ headers: this.requestHeader});
  }

  public register(file:File,email:string,password:string,firstName:string,lastName:string,profession:string,ville:string,gouvernorat:string,adress:string,tel:string,situationFamilliale:string,date: Date ): Observable<HttpEvent<any>>{
    var datestr = (new Date(date)).toUTCString();

    const formData: FormData = new FormData() ;
    formData.append('file', file);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('profession', profession);
    formData.append('ville', ville);
    formData.append('gouvernorat', gouvernorat);
    formData.append('adress', adress);
    formData.append('tel',tel);
    formData.append('situationFamilliale',situationFamilliale);
    formData.append('date',datestr);

    const req = new HttpRequest('POST', `${this.API}/registerNewUser`,formData,
    {

    headers:this.requestHeader

    } );

    return this.httpclient.request(req);


}


  public forUser() {
    return this.httpclient.get(this.API + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.API + '/forAdmin', {
      responseType: 'text',
    });
  }


  public roleMatch(allowedRoles : any) :boolean{
    let isMatch = false;
    const userRoles: any = this.auth.getRoles();
    if(userRoles) {
      for(let i = 0; i<userRoles.length; i++) {
        if(allowedRoles.indexOf(userRoles[i].roleName) !== -1){
         isMatch = true;
         break;
        }
      }
    }
    return isMatch;
    }


    getCustomerByEmail(email: any): Observable<any> {
      return this.httpclient.get(`${this.API}/customerbyemail/${email}`);
    }

}










