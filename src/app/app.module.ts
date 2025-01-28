import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Home1Component } from './Home/home1/home1.component';
import { Home2Component } from './Home/home2/home2.component';
import { Home3Component } from './Home/home3/home3.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubsectionComponent } from './subsection/subsection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { ToastrModule, provideToastr } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NotFoundComponent,
    SubsectionComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Animation support
    ToastrModule.forRoot(),  // Toastr configuration
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
