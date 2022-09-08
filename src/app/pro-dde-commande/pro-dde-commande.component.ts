import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-pro-dde-commande',
  templateUrl: './pro-dde-commande.component.html',
  styleUrls: ['./pro-dde-commande.component.css']
})
export class ProDdeCommandeComponent implements OnInit {

  constructor(private cartService:CartService, private actRoute: ActivatedRoute) { }
orderId:any
list:any
  ngOnInit(): void {
    this.orderId = this.actRoute.snapshot.params['orderId'];
    this.cartService.getByOrderId(this.orderId)
    .subscribe(res=>{
      this.list = res;

    console.log(this.list)
          })


}
}
