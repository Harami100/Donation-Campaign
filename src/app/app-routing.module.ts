import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { FoodComponent } from './categories/food/food.component';
import { RandomDonationComponent } from './categories/random-donation/random-donation.component';
import { StudyComponent } from './categories/study/study.component';

import { NgoComponent } from './components/registrationform/ngo/ngo.component';
import { UserComponent } from './components/registrationform/user/user.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuantityComponent } from './components/quantity/quantity.component';


import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AdminPageComponent } from './components/adminpanel/admin-page/admin-page.component';
import { DonorDashboardComponent } from './components/adminpanel/donor-dashboard/donor-dashboard.component';
import { NgoDashboardComponent } from './components/adminpanel/ngo-dashboard/ngo-dashboard.component';
import { UserDashboardComponent } from './components/adminpanel/user-dashboard/user-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { WidgetsComponent } from './components/admin/widgets/widgets.component';
import { CreateNgoComponent } from './components/create-campaign/create-ngo/create-ngo.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
 {path:'food',component:FoodComponent},
 {path:'clothes',component:ClothesComponent},
{path:'study',component:StudyComponent},
{path:'random-donation',component:RandomDonationComponent},
{path:'quantity',component:QuantityComponent},
  
  //{path:'login' , redirectTo:'LoginComponent' , pathMatch:'full'},
  {path:'login' ,component:LoginComponent},
  {path:'home' ,component:HomeComponent},

  {path:'logout',component:LogoutComponent},
  {path:'ngo' , component:NgoComponent},
  {path:'user' , component:UserComponent},
  {path:'admin', component:AdminComponent},
  {path: 'widgets' , component:WidgetsComponent},

  {path:'adminpage', component:AdminPageComponent},
 { path: 'showDonor',component:DonorDashboardComponent},  
  {path: 'showNGO',component:NgoDashboardComponent},
  {path: 'showUser',component:UserDashboardComponent},
{path: 'createngo' , component:CreateNgoComponent},

  
  
  {path: 'signup' ,component:SignUpComponent},

  {path: '**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
