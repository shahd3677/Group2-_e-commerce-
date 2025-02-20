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
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { ResetComponent } from './Account/reset/reset.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full' },
  {path:'home',component:HomeComponent,title:'Home Farnic',canActivate:[authGuard]},
  {path:'about',component:AboutComponent,title:'About Farnic',canActivate:[authGuard]},
  {path:'contact',component:ContactComponent,title:'Contact us',canActivate:[authGuard]},
  {path:'shop',component:ProductsComponent,title:'Our Products',canActivate:[authGuard]},
  {path:'single-product/:productID',component:SingleProductComponent,title:'Product Details',canActivate:[authGuard]},
  {path:'category/:catTitle',component:ProductsCategoryComponent,title:'Products Cateory',canActivate:[authGuard]},
  {path:'blog',component:BlogsComponent,title:'Our Blogs',canActivate:[authGuard]},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'register',component:RegisterComponent,title:'Register'},
  {path:'reset',component:ResetComponent,title:'Reset Password',canActivate:[authGuard]},
  {path:'forget',component:ForgetPasswordComponent,title:'Forget Password',canActivate:[authGuard]},
  {path:'profile',component:ProfileComponent,title:'User Profile',canActivate:[authGuard]},
  {path:'cart',component:CartComponent,title:'cart',canActivate:[authGuard]},
  {path:"**",component:NotFoundComponent,title:'404 page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
