import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardData = [{
    icon: 'fa-solid fa-layer-group icon',
    className: 'custom-card card text-center mb-3 col-2 background-one',
    title: 'Today Orders',
    data: 60.00
  },
  {
    icon: 'fa-solid fa-layer-group icon',
    className: 'custom-card card text-center mb-3 col-2 background-two',
    title: 'Yesterday Orders',
    data: 2813.62
  },
  {
    icon: 'fa-solid fa-cart-shopping icon',
    className: 'custom-card card text-center mb-3 col-2 background-three',
    title: 'This Month',
    data: 10366.33
  },
  {
    icon: 'fa-solid fa-credit-card icon',
    className: 'custom-card card text-center mb-3 col-2 background-four',
    title: 'Last Month',
    data: 22613.70
  },
  {
    icon: 'fa-solid fa-credit-card icon',
    className: 'custom-card card text-center mb-3 col-2 background-five',
    title: 'All-Time Sales',
    data: 473926.96
  }]

  recent_orders = [{
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  },
  {
    id: '11626',
    time: 'un4efine4 4:55 PM',
    customerName: 'Suraj',
    amount: 50.78
  }
  ]
}
