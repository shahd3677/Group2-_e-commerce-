import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  standalone: false,
  
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
  title="Reset Password"
  resetForm :FormGroup = new FormGroup({
  
    password: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    confirm_password: new FormControl('', [Validators.required]) 
  })
  constructor(){

  }
  handle(form:FormGroup){

  }
}
