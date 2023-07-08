import { Injectable } from '@angular/core';
import { FoodItem } from '../food-item';
import { tag } from './tag';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  menu:FoodItem[]=[
    {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: true,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '/assets/images/foods/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      amount:1
    },
    {
      id: 2,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: false,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: '/assets/images/foods/food-2.jpg',
      tags: ['SlowFood', 'Lunch'],
      amount:1
    },
    {
      id: 3,
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: true,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: '/assets/images/foods/food-3.jpg',
      tags: ['FastFood', 'Hamburger'],
      amount:1
    },
    {
      id: 4,
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/images/foods/food-4.jpg',
      tags: ['FastFood', 'Fry'],
      amount:1
    },
    {
      id: 5,
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: '/assets/images/foods/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
      amount:1
    },
    {
      id: 6,
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: '/assets/images/foods/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      amount:1
    },
  ];
  tags:tag[]=[
    {name:'All',count:14},
    {name:'FastFood',count:4},
    {name:'Pizza',count:2},
    {name:'Lunch',count:3},
    {name:'SlowFood',count:2},
    {name:'Hamburger',count:1},
    {name:'Fry',count:1},
    {name:'Soup',count:1},
  ];
  constructor() {}
 getfoodItems() {
  return this.menu;
}
searchedItem(searchedItem:string) {
   let newMenu= this.menu.filter((item) => item.name.toLowerCase().includes(searchedItem.toLowerCase()));
   return newMenu;
}
tagedItem(tagCategory:string) {
return tagCategory =='All'?
this.menu :
this.menu.filter((item) => item.tags.includes(tagCategory))
}
getFoodById(id:number):FoodItem {
return this.menu.find((item) => item.id==id)!;
}
}
