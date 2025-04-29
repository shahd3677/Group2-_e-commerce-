import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminGlobalService } from '../../services/admin-global.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private staff: StaffService, private router: Router, private toastr: ToastrService, public adminGlobal: AdminGlobalService) {
    let token = localStorage.getItem('token');
    if (token)
      this.router.navigate(['/dashboard/home']);
    else {
      this.router.navigate(['/dashboard/login']);
      this.toastr.error("Please, logIn")
    }

  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  isSubmitted: boolean = false

  get emailControl() {
    return this.loginForm.controls.email
  }
  get passwordControl() {
    return this.loginForm.controls.password
  }

  handlerLogin() {
    this.isSubmitted = true
    if (this.loginForm.valid) {
      this.staff.login(this.loginForm.value).subscribe(res => {
        this.toastr.success(res.message)
        localStorage.setItem("token", res.token)
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard/home']);
        this.adminGlobal.isloggedIn = true;
      }, (err) => {
        this.toastr.error(err.error.message)
      })
    }
  }
}
