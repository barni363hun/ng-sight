import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.scss'],
})
export class SectionOrderComponent implements OnInit {
  constructor() {}

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed',
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed',
    },
    {
      id: 3,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed',
    },
    {
      id: 4,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed',
    },
    {
      id: 5,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'CO',
        email: 'mainst@example.com',
      },
      total: 230,
      placed: new Date(2017, 12, 1),
      fulfilled: new Date(2017, 12, 2),
      status: 'Completed',
    },
  ];

  ngOnInit(): void {}
}
