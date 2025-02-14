import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from "@angular/forms"

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
register(arg0: FormGroup<any>) {
throw new Error('Method not implemented.');
}
  title: string = "Sign Up"
  formRegister: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]), // رقم هاتف مكون من 10-15 رقم
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]), // كلمة مرور مكونة من 6 أرقام فقط
    confirm_password: new FormControl('', [Validators.required]) ,
  })
  constructor(private _AuthService: AuthService,private toastr: ToastrService,private router:Router) {

  }

  ngOnInit(): void {

}
handle(form:FormGroup):void{
  if(form.valid){
   this._AuthService.Register(form.value).subscribe({
    next:(res :any)=>{
      console.log(res)
      this.toastr.success("Sign Up Successfully")
      this.router.navigateByUrl('/')
    },
    error:(err)=>{
      console.log(err)
      this.toastr.error(err.error.message)
    }
   }

   )
  }
}

}
