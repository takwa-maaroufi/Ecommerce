import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { CartService } from '../service/cart.service';
import { ProDdeCommandeComponent } from '../pro-dde-commande/pro-dde-commande.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historique-c',
  templateUrl: './historique-c.component.html',
  styleUrls: ['./historique-c.component.css']
})

export class HistoriqueCComponent implements OnInit {

  constructor(private cartService:CartService,private http:HttpServiceService,private actRoute :ActivatedRoute) { }
  commandes:any
  email:any
  cartObj:any
  orderId:any
  productList:any
  ngOnInit(): void {
this.getOrdersByUser();
    this.cartService.CmdServiceEvent.subscribe(data=>{
      this.commandes =  this.cartService.getCmd();
      console.log(this.commandes);
    });
}
  isShown: boolean = false ;
  toggleShow() {

    this.isShown = ! this.isShown;

    }



getOrdersByUser(){
  this.http.postRequestWithToken("api/order/getOrdersByUserId",{}).subscribe((data:any)=>{
    this.commandes = data;
  },error=>{
    alert("Error while fetching the cart Details");
  })
}

}
