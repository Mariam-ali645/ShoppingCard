import { Customer } from "./customer";
import { Items } from "./items";

export class ShoppingCart {
    id:number =0;
    orderDate:Date|null=null;
    orderTime:Date|null=null;
    customer:Customer|null=null;
    items:Items[]=[];
}
