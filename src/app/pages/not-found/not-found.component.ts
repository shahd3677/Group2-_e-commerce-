import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: false,

  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
     title:string="Error_404"
     imgLogo:string="Error.svg"
     constructor(private router:Router){}
     
     handelSubmit(){
      const isLogin=localStorage.getItem("userToken")
      if(isLogin){
       this.router.navigate(['/home'])
      }else{
        this.router.navigate(['/login'])
      }
     }
}
