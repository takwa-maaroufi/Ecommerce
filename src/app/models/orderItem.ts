import { CartItem } from "./cart-item";

export class OrderItem {

  imageUrl: string;
  unitPrice: number;
  quantity: number;
  id: number;

  constructor(cartItem: CartItem){
      this.imageUrl = cartItem.imageURL;
      this.unitPrice = cartItem.unitPrice;
      this.quantity = cartItem.quantity;
      this.id = cartItem.id;

  }

}
