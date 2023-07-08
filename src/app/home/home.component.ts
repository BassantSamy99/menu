import { Component, OnInit} from '@angular/core';
import { HomeServiceService } from '../shared/services/home-service.service';
import { FoodItem } from '../shared/food-item';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items:FoodItem[]=[];
constructor(private _HomeServiceService:HomeServiceService,
  private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this._ActivatedRoute.params.subscribe((params) => {
    if (params.searchTerm) {
      this.items=this._HomeServiceService.searchedItem(params.searchTerm);
    }
    else if(params.tagCategory) {
     this.items=this._HomeServiceService.tagedItem(params.tagCategory);
    }
    else {
  this.items=this._HomeServiceService.getfoodItems();
    }
  })
}
}

