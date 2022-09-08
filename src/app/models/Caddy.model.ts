import { ItemProduct } from "./ItemProduct.model";
import { Produit } from "./produit.model";
import { User } from "./user";


export class Cart {
  public id!: string;
  public customerId: User['id'];
  public items: Produit[] = new Array<Produit>();
}

