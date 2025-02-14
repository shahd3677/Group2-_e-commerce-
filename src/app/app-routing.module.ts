import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsCategoryComponent } from './pages/products-category/products-category.component';


const routes: Routes = [
  {path:'',redirectTo:'/home01',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,data:{title:'About Farnic'}},
  {path:'contact',component:ContactComponent,data:{title:'Contact us'}},
  {path:'shop',component:ProductsComponent,data:{title:'Our Products'}},
  {path:'category',component:ProductsCategoryComponent,data:{title:'Products Category'}},
  {path:'login',component:LoginComponent,data:{title:'Login'}},
  {path:'register',component:RegisterComponent,data:{title:'Register'}},
  {path:"**",component:NotFoundComponent,data:{title:'404 page'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
