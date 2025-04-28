import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router, private toastr: ToastrService) { }

  handlerLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/dashboard/login']);
    this.toastr.success('log out successfully')
    console.log("done")
  }
}
