import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { AdminGlobalService } from './services/admin-global.service';
import { Router } from '@angular/router';
// import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-admin',
  standalone: false,

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(public global: GlobalService, public adminGlobal: AdminGlobalService, private router: Router) {
    this.global.navbarFlag = false;
    this.global.footerFlag = false;

  }
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.adminGlobal.isloggedIn = true
      this.router.navigate(['/dashboard/home']);
    }
    else {
      this.adminGlobal.isloggedIn = false;
      this.router.navigate(['/dashboard/login']);
    }
    console.log(this.adminGlobal.isloggedIn);
  }

  ngOnDestroy() {
    this.global.navbarFlag = true;
    this.global.footerFlag = true;
  }
}
