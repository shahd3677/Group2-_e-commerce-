import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title : string = "About Farnic"
  imgAbout1 : string = ""
  constructor(public _GlobalServices:GlobalService){
    this.imgAbout1 = this._GlobalServices.imgAbout1
  }
}
