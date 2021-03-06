import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrderComponent } from './app/sections/section-order/section-order.component';
import { SectionHealthComponent } from './app/sections/section-health/section-health.component';

export const appRoutes: Routes = [
    {
        path: 'sales',
        component: SectionSalesComponent
    },
    {
        path: 'orders',
        component: SectionOrderComponent
    },
    {
        path: 'health',
        component: SectionHealthComponent
    },
    {
        path: '',
        redirectTo: '/sales',
        pathMatch: 'full'
    }
]