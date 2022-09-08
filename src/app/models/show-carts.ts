import { Produit } from "./produit.model";

export class ShowCart {
  public cartId?: string;
    public customerId?: number;
    public items: Produit[] = new Array<Produit>();
    public valorTotal?: number;
}
