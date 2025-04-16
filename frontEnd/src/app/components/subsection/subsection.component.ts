import { Component,Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-subsection',
  standalone: false,

  templateUrl: './subsection.component.html',
  styleUrl: './subsection.component.css'
})
export class SubsectionComponent{
 image:string=""
@Input() pageTitle:string="";
 constructor(private _GlobalServices:GlobalService){
  this.image=this._GlobalServices.imgSection
 }

}
