import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-logos',
  standalone: false,

  templateUrl: './logos.component.html',
  styleUrl: './logos.component.css'
})
export class LogosComponent {
  bLogo1: string = ""
  bLogo2 : string = ""
  bLogo3 : string = ""
  bLogo4 : string = ""
  bLogo5 : string = ""
  constructor(public _GlobalServices:GlobalService){
    this.bLogo1 = this._GlobalServices.bLogo1
    this.bLogo2 = this._GlobalServices.bLogo2
    this.bLogo3 = this._GlobalServices.bLogo3
    this.bLogo4 = this._GlobalServices.bLogo4
    this.bLogo5 = this._GlobalServices.bLogo5
  }

}
