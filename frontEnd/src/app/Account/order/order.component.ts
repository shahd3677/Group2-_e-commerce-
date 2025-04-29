import { Component, OnInit } from '@angular/core';

interface Order {
  id: string;
  totalPrice: number;
  date: Date;
}

@Component({
  selector: 'app-order',
  standalone: false,

  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  title: string = "Orders"
  orders: Order[] = [];

  ngOnInit(): void {
    // Sample mock data
    this.orders = [
      {
        id: 'ORD123456',
        totalPrice: 120.50,
        date: new Date('2024-11-10')
      },
      {
        id: 'ORD123457',
        totalPrice: 89.99,
        date: new Date('2025-02-15')
      },
      {
        id: 'ORD123458',
        totalPrice: 45.00,
        date: new Date('2025-04-01')
      }
    ];
  }
}

