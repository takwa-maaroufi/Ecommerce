import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
    constructor(private fb:FormBuilder,
      private userService:UserService,
      private auth: AuthentificationService,
      private router: Router) {

  }
  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.auth.setRoles(response.user.role);
        this.auth.setToken(response.jwtToken);
        this.auth.setEmail(response.user.email);
        const role = response.user.role[0].roleName;
          this.router.navigate(['/acceuil']);
          console.log(response.jwtToken);
          console.log(response.email);
      }
    );
  }
}