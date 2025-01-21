import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './Home/home1/home1.component';
import { Home2Component } from './Home/home2/home2.component';
import { Home3Component } from './Home/home3/home3.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home01',pathMatch:'full'},
  {path:'home01',component:Home1Component,data:{title:'Home 1'}},
  {path:'home02',component:Home2Component,data:{title:'Home 2'}},
  {path:'home03',component:Home3Component,data:{title:'Home 3'}},
  {path:'login',component:LoginComponent,data:{title:'Login'}},
  {path:'register',component:RegisterComponent,data:{title:'Register'}},
  {path:"**",component:NotFoundComponent,data:{title:'404 page'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
