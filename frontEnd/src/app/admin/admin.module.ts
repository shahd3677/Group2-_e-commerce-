import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffComponent } from './pages/staff/staff.component';
@NgModule({
  declarations: [
    AdminComponent,
    OrdersComponent,
    CustomersComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    StaffComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()]
})
export class AdminModule { }
