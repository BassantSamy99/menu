import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../shared/services/home-service.service';
import { FoodItem } from '../shared/food-item';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:FoodItem;
  cartItems:FoodItem[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _HomeServiceService:HomeServiceService) {}
    ngOnInit(): void {
      this.food=this._HomeServiceService.getFoodById(this._ActivatedRoute.snapshot.params.id)
    }
    addToCart(food:FoodItem) {
      if (localStorage.getItem('inCart')) {
        this.cartItems=JSON.parse(localStorage.getItem('inCart')!);
        let existItem = this.cartItems.find((item)=> item.id == food.id);
        if (!existItem) {
          this.cartItems.push(food);
          localStorage.setItem('inCart',JSON.stringify(this.cartItems));
        }
      }
    else {
    this.cartItems.push(food);
    localStorage.setItem('inCart',JSON.stringify(this.cartItems));
    }
    }
 }


