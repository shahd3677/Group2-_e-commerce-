import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit{
logoPage:string=""
constructor(private _GlobalServices:GlobalService){
 
}
ngOnInit(): void {
  this.logoPage=this._GlobalServices.logoPage
}
}
