export interface FoodItem {
    id:number;
    tags:string[],
    imageUrl:string;
    name:string,
    favorite:boolean;
    stars:number;
    origins:string[];
    cookTime:string;
    price:number;
    amount:number;
}
