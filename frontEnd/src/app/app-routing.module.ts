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
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderComponent } from './Account/order/order.component'



const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: 'Home Farnic' },
  { path: 'about', component: AboutComponent, title: 'About Farnic' },
  { path: 'contact', component: ContactComponent, title: 'Contact us' },
  { path: 'shop', component: ProductsComponent, title: 'Our Products' },
  { path: 'single-product/:productID', component: SingleProductComponent, title: 'Product Details' },
  { path: 'category/:catTitle', component: ProductsCategoryComponent, title: 'Products Cateory' },
  { path: 'blog', component: BlogsComponent, title: 'Our Blogs' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'reset', component: ResetComponent, title: 'Reset Password' },
  { path: 'forget', component: ForgetPasswordComponent, title: 'Forget Password' },
  { path: 'profile', component: ProfileComponent, title: 'User Profile' },
  { path: 'cart', component: CartComponent, title: 'Our Cart' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout' },
  { path: 'order', component: OrderComponent, title: 'Orders' },
  { path: 'dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: "**", component: NotFoundComponent, title: '404 page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
