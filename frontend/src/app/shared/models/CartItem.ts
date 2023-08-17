import { Food } from "./Food";

export class CartItem{
    constructor(public food:Food){}

    quontity:number = 1;
    price: number=this.food.price;
}