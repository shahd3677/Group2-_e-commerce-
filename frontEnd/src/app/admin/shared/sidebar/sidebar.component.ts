import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminGlobalService } from '../../services/admin-global.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router, private toastr: ToastrService, public adminGlobal: AdminGlobalService) { }

  handlerLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/dashboard/login']);
    this.toastr.success('log out successfully')
    this.adminGlobal.isloggedIn = false;
  }
}
