import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-acces-success',
  templateUrl: './acces-success.component.html',
  styleUrls: ['./acces-success.component.css']
})
export class AccesSuccessComponent implements OnInit {
 verificationCode:any;
  message: any;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }



}

