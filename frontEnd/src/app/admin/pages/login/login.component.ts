import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private global: StaffService, private router: Router, private toastr: ToastrService) { }
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
      this.global.login(this.loginForm.value).subscribe(res => {
        this.toastr.success(res.message)
        localStorage.setItem("token", res.token)
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard/home']);
      }, (err) => {
        this.toastr.error(err.error.message)
      })
    }
  }
}
