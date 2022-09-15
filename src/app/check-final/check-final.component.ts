import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/http-service.service';

import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-check-final',
  templateUrl: './check-final.component.html',
  styleUrls: ['./check-final.component.css']
})
export class CheckFinalComponent implements OnInit {
  commandes:any
  constructor(private cartService:CartService,private http:HttpServiceService,private actRoute :ActivatedRoute) { }

  ngOnInit(): void {

  }


}