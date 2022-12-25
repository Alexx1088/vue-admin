import {Entity} from "@/interfaces/entity";
import {Order_item} from "@/classes/order_item";
import orderItems from "@/secure/orders/OrderItems.vue";

export class Order implements Entity {
    id:number;
    first_name: string;
    last_name: string;
    email: string;
    order_items: Order_item[];

    constructor(id: 0, first_name = '', last_name = '', email = '', OrderItems = []) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.order_items = OrderItems;
    }
}
