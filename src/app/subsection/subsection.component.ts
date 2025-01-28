
import { Component, OnInit,Input } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-subsection',
  standalone: false,
  
  templateUrl: './subsection.component.html',
  styleUrl: './subsection.component.css'
})
export class SubsectionComponent implements OnInit{
 image:string=""
@Input() pageTitle:string="";
 constructor(private _GlobalServices:GlobalService){
  this.image=this._GlobalServices.imgSection
 }
 ngOnInit(): void {

 
}
}
