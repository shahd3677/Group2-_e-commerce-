import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsCategoryComponent } from './pages/products-category/products-category.component';
import { BestSectionComponent } from './components/best-section/best-section.component';
import { SubsectionComponent } from './components/subsection/subsection.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { LogosComponent } from './components/logos/logos.component';
import { ProfileComponent } from './Account/profile/profile.component';
import { OrderComponent } from './Account/order/order.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ResetComponent } from './Account/reset/reset.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { SortbySectionComponent } from './components/sortby-section/sortby-section.component';
import { authInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsCategoryComponent,
    BestSectionComponent,
    SubsectionComponent,
    NotFoundComponent,
    NewsletterComponent,
    LogosComponent,
    ProfileComponent,
    OrderComponent,
    CartComponent,
    ProductsComponent,
    BlogsComponent,
    CheckoutComponent,
    SearchComponent,
    ProductSectionComponent,
    SingleProductComponent,
    ResetComponent,
    ForgetPasswordComponent,
    SortbySectionComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptorInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
