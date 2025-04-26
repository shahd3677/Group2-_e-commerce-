import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
title="Login"
formLogin: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]), // كلمة مرور مكونة من 6 أرقام فقط
})
constructor(private _AuthService: AuthService,private toastr: ToastrService,private router:Router){
  // if(localStorage.getItem("userToken")){
  //   this.router.navigate(['/login'])
  // }
}
 handle(form:FormGroup){
  if(form.valid){
    this._AuthService.Login(form.value).subscribe({
       next:(res)=>{
         localStorage.setItem("userToken",res.data.token)
         this._AuthService.userToken=res.data.token;
         this._AuthService.isLogin=true
         this.toastr.success("Login Successsfully");
         this.router.navigateByUrl('/home');
       },
       error:(err)=>{
        console.log(err)
        this.toastr.error(err.error.message);

       }
    })
  }
 }
 
}
