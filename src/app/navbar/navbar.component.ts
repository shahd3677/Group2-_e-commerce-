import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  logoPage: string = '';
  image: string = '';
  pageTitle: string = '';
  constructor(private _GlobalServices: GlobalService, public _AuthServices:AuthService,private router:Router) {

  }
  ngOnInit(): void {
    this.logoPage = this._GlobalServices.logoPage
    this.image = this._GlobalServices.imgSection;
  
  }
  handelLogout(){
    localStorage.removeItem("userToken")
    this._AuthServices.isLogin=false;
    this.router.navigate(['/'])
  }
}

