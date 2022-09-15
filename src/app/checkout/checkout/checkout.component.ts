import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/Caddy.model';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/orderItem';
import { Produit } from 'src/app/models/produit.model';
import { Purchase } from 'src/app/models/purchase';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { HttpServiceService } from 'src/app/http-service.service';

import { CartService } from 'src/app/service/cart.service';
import { CheckoutService } from 'src/app/service/Checkout.service';
import { PanierService } from 'src/app/service/panier.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  cartObj : any
  cartTotalPrice :any;
  withlivraison:any
  pay_type = "cash_on_delivery";
  delivery_address = "";
  adress="";
  gouvernorat=""
  profession=""
  firstName=""
  lastName=""
  date=""
  email=""
  ville=""
  password=""
  situationFamilliale=""
  tel=""
  checkoutForm!: FormGroup;
qty=1;
  file!:File;
    constructor(private userService:UserService, private router:Router,private cartService:CartService,private http:HttpServiceService) { }

  ngOnInit() {
    //below function will be triggerd from when removing and qty  is changing..
    this.forUser();
    this.cartService.cartServiceEvent.subscribe(data=>{
      this.cartObj =  this.cartService.getCartOBj();
      this.cartTotalPrice  = this.cartService.cartTotalPrice;
    });
  }


  situation: any;
  gouver:any;
  DateSelected:any;
   SelectedValue :any;
    Professions =[{"id":"0", name:"Profession *"},{"id":"1",name:"Agriculteurs /Artisans"},{"id":"2",name:"Commerçant"},{"id":"3",name:"Chef d entreprise"},{"id":"4",name:"Profession libérale"},{"id":"5",name:"Cadre supérieur"},{"id":"6",name: "Cadre moyen"},{"id":"7",name:"Enseignant, Professeur, professions scientifiques"},{"id":"8",name:"Ingénieurs / Cadre technique d entreprise"},{"id":"9",name:"Technicien /Agent de maîtrise"},{"id":"10",name:"Policier / militaire"},{"id":"11",name:"Fonction publique"},{"id":"12",name:"Employés administratifs d entreprise"},{"id":"13",name:"Ouvriers / Chauffeur"},{"id":"14",name:"Femme au foyer"},{"id":"15",name:"Elèves, étudiants"},{"id":"16",name:"Sans emploi"},{"id":"17",name:"Autres"}]
    Gouvernorat =[{"id":"0", name:"Gouvernorat *"},{"id":"1",name:"Ariana"},{"id":"2",name:"Béja"},{"id":"3",name:"Ben Arous"},{"id":"4",name:"Bizerte"},{"id":"5",name:"Gabes"},{"id":"6",name:"Gafsa"},{"id":"7",name:"Jendouba"},{"id":"8",name:"kairouan"},{"id":"9",name:"kasserine"},{"id":"10",name:"kébili"},{"id":"11",name:"Le kef"},{"id":"12",name:"Mahdia"},{"id":"13",name:"La Manouba"},{"id":"14",name:"Médenine"},{"id":"15",name:"Monasrir"},{"id":"16","name":"Nabeul"},{"id":"17",name:"Sfax"},{"id":"18",name:"Sidi Bouzid"},{"id":"19",name:"Siliana"},{"id":"20",name:"Sousse"},{"id":"21",name:"Tataouine"},{"id":"22",name:"Tozeur"},{"id":"23",name:"Zaghouan"}]
    SituationFamilliale=[{"id":"0", name:"Situation Familliale *"}, {"id":"1",name: "Célibataire"}, {"id":"2",name:"Marié(e)"},{"id":"3",name:"Divorcé(e)"},{"id":"4",name:" Veuf(e)"}];
   img(file : any){
      console.log(file);
      console.log(file.files[0]);
      this.file = file.files[0];
    }
    forUser() {
      this.userService.forUser().subscribe(
        (response) => {
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      );
    }
    getTotalAmounOfTheCart(){
      let obj = this.cartObj;
      let totalPrice  = 0;
      for(var o in obj ){
        totalPrice = totalPrice +parseFloat(obj[o].price);
      }
      return totalPrice.toFixed(2);
    }



    getCartDetailsByUser(){
      this.http.postRequestWithToken("api/addtocart/getCartsByUserId",{}).subscribe((data:any)=>{
        this.cartObj = data;
        this.cartTotalPrice = this.getTotalAmounOfTheCart();
      })
    }
 increment(){
  this.qty+=1
 }
 decrement(){
  if(this.qty=1){
    this.qty=1
  }else{
    this.qty-=1
  }
 }


    removeCartById(cartObj:any){
      if(confirm("Are you sure want to delete..?")){
        let id  = cartObj.id;
        this.cartService.removeCart(id);
      }
    }
    checkoutCart(){
      if(this.adress == ""){
        alert("Delivery address should not be empty");
        return;
      }
      if(this.pay_type == "cash_on_delivery"){
        let request = {
          "total_price":this.cartTotalPrice,
          "pay_type":"COD",
          "firstName":this.firstName,
          "lastName":this.lastName,
          "email":this.email,
          "gouvernorat":this.gouvernorat,
          "profession":this.profession,
          "ville":this.ville,
          "adress":this.adress,
          "tel":this.tel,
        }
        this.http.postRequestWithToken("api/order/checkout_order",request).subscribe((data:any)=>{
          alert("checkout process completed.Your Order is processed..");
          this.cartService.getCartDetailsByUser();
          this.router.navigate(['SuivieCheckout']);
       })

      }else{
          alert("Payment Integration is not yet completed.")
      }
    }

}