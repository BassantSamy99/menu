import { Component, OnInit } from '@angular/core';
import { tag } from '../shared/services/tag';
import { HomeServiceService } from '../shared/services/home-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags:tag[]=[];
  constructor(private _HomeServiceService:HomeServiceService){}
  ngOnInit(): void {
    this.tags=this._HomeServiceService.tags;
  }
}
