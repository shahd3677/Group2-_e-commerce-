import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'farnic';

  constructor(public global: GlobalService,private router:Router,private _AuthServices:AuthService) {
    // let token=localStorage.getItem("userToken")
    // if(!token){
    //   this.router.navigate(['/login'])
    //   this._AuthServices.isLogin=false
    // }else{
    //   this._AuthServices.isLogin=true
    // }
  }
}
