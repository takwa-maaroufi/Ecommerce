import { Marque } from "./marque.model";
import { Souscategory } from "./Souscategory.model";
import { Category } from "./Category.model";
export class Produit {
  public id!: number;
  public name? : string;
  public codeBarre? : string;
  public imageURL?: File;
  public price?: any;
  public description? : string;
  public unite? : string;
  public  qte?: number=1;
  public available?: boolean;
  public Quantity?:any;
  public marqueId? : number;
  public nomMarque? : string;
  public marque? : Marque = {nomMarque :""};
  public category?:Category={categoryName:""}

}


