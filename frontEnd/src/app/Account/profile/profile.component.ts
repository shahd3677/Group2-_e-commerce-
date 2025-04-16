import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
  firstName:string=''
  lastName:string=''
  userEmail:string=''
  imgUrl=null
constructor(public _AuthService:AuthService){}
ngOnInit(): void {
  this._AuthService.profile().subscribe({
    next:(res)=>{
    console.log(res)
    this.firstName=res.data.customer_first_name;
    this.lastName=res.data.customer_last_name;
    this.userEmail=res.data.customer_email
    }
  })
}

userImage(){
  let imgElement=document.getElementById("img")
  imgElement?.click()
  
 }
 handleFile(event:any){
  console.log(event)
  let img=event.target.files[0]
  let formData=new FormData()
  formData.append("image",img)
  this._AuthService.userImage(formData).subscribe({
    next:(res)=>{
      let icon:any=document.getElementById('icon-upload')
    
      if(res.data.image){
      
        icon.classList.add("d-none");
        this.imgUrl=res.data.image
      }
      icon.classList.add("d-block");
     
     
    }
  })
 }
}
