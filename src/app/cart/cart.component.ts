import { Component,OnInit } from '@angular/core';
import { FoodItem } from '../shared/food-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems!:FoodItem[];
  quantity!:number;
  count!:number;
  totalPrice!:number;
  constructor() {}
  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('inCart')!)
    this.showCountAndPrice();
  }
  showAmount(event:any,item:any) {
    this.quantity=event.target.value;
    this.cartItems[this.cartItems.indexOf(item)].amount=this.quantity;
    localStorage.setItem('inCart',JSON.stringify(this.cartItems));
    this.cartItems=JSON.parse(localStorage.getItem('inCart')!);
    this.showCountAndPrice();
  }
   showCountAndPrice() {
    this.count=0;
    this.totalPrice=0;
    for(let item in this.cartItems) {
      this.count += Number(this.cartItems[item].amount);
      this.totalPrice = this.totalPrice+this.cartItems[item].amount * Number(this.cartItems[item].price);
    }
   }
   removeItem(item:any) {
    this.cartItems.splice(this.cartItems.indexOf(item),1);
    localStorage.setItem('inCart',JSON.stringify(this.cartItems));
    this.showCountAndPrice();
   }
}

