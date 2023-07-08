import { Component,OnInit } from '@angular/core';
import { HomeServiceService } from '../shared/services/home-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm:string='';
constructor(private _homeService:HomeServiceService,
  private _ActivatedRoute:ActivatedRoute,
  private _router:Router) {}
ngOnInit(): void {
  // this._ActivatedRoute.params.subscribe((params) =>
  // {
  //   if(this.searchTerm) {
  //     params.searchTerm == this.searchTerm;
  //   }
  // });
}
search() {
  if(this.searchTerm) {
    this._router.navigateByUrl('search/'+this.searchTerm)

  }
}
}
