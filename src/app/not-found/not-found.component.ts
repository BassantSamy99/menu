import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
@Input() visible:boolean=false;
@Input() message:string='Not Found';
@Input() reset:string='reset';

constructor() {}
ngOnInit(): void {

}
}
