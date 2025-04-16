import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: false,
  
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent  implements OnInit{
  title="Forgot Password"
  forgetPassword: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 handle(form:FormGroup){

 }

}
