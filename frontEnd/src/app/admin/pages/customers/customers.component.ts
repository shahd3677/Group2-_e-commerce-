import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  users: any[] = [];
  page = 1;
  constructor(public global: UsersService) { }
  ngOnInit() {
    this.global.getUsers().subscribe((data) => {
      this.users = data.users;
    })

  }
}
