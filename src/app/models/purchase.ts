import { HttpUserEvent } from "@angular/common/http";
import { Order } from "./order";
import { OrderItem } from "./orderItem";
import { User } from "./user";

export class Purchase {
  User?: User;
  order?: Order;
  orderItems?: OrderItem[];
}
