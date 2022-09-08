import { Produit } from "./produit.model";

export class CartItem {
  [x: string]: any;
  id: any;
  name?: any;
  imageURL?: any;
  price?: any;

  quantity: number;
  qte:number =1;

  constructor(product: Produit){
      this.id = product.id;
      this.name = product.name;
      this.image = product.imageURL;
      this.price = product.price;
      this.quantity = 1;
  }
}
