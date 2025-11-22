import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+private/+public/public-template/public-template';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { HomePage } from './+pages/+private/+public/home-page/home-page';
import { AboutPage } from './+pages/+private/+public/about-page/about-page';
import { ProductsPage } from './+pages/+private/+public/products-page/products-page';
import { ContactPage } from './+pages/+private/+public/contact-page/contact-page';
import { LoginPage } from './+pages/+private/+public/login-page/login-page';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { ProductPage } from './+pages/+private/product-page/product-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';

export const routes: Routes = [
{path:'public',component:PublicTemplate,children:[
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'product',component:ProductsPage},
    {path:'contact',component:ContactPage},
    {path:'login',component:LoginPage},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
]},

{path:'private',component:PrivateTemplate,children:[
    {path:'dashboard',component:DashboardPage},
    {path:'users',component:UsersPage},
    {path:'product',component:ProductPage},
    {path:'order',component:OrdersPage},
     {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
    {path:'**',redirectTo:'dashboard'}
]},

{path:'',redirectTo:'public',pathMatch:'full'},
{path:'**',redirectTo:'public'}
];
