import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'farnic';

  constructor(private _AuthService:AuthService){
  
  }
 ngOnInit(): void {
  let token=localStorage.getItem("userToken")
   if(token){
    this._AuthService.profile().subscribe({
      next:(res)=>{
        console.log(res)
        this._AuthService.isLogin=true;
        this._AuthService.userData=res.data
       this._AuthService.userData.first_name=res.data.customer_first_name

      }
      
    })
   }
   this._AuthService.isLogin=false
 }
}
