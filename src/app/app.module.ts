import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { DonorService} from './services/donor.service';
import { NgoService} from './services/ngo.service';
import { UserService} from './services/user.service';

import { NgoComponent } from './components/registrationform/ngo/ngo.component';
import { UserComponent } from './components/registrationform/user/user.component';
import { FoodComponent } from './categories/food/food.component';
import { ClothesComponent } from './categories/clothes/clothes.component';
import { StudyComponent } from './categories/study/study.component';
import { RandomDonationComponent } from './categories/random-donation/random-donation.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { AdminPageComponent } from './components/adminpanel/admin-page/admin-page.component';
import { DonorDashboardComponent } from './components/adminpanel/donor-dashboard/donor-dashboard.component';
import { NgoDashboardComponent } from './components/adminpanel/ngo-dashboard/ngo-dashboard.component';
import { UserDashboardComponent } from './components/adminpanel/user-dashboard/user-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { WidgetsComponent } from './components/admin/widgets/widgets.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CreateNgoComponent } from './components/create-campaign/create-ngo/create-ngo.component';
import { CreateUserComponent } from './components/create-campaign/create-user/create-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    NavbarComponent,
    NotFoundComponent,
    CarouselComponent,
    UserDashboardComponent,
    NgoDashboardComponent,
    DonorDashboardComponent, 
    NgoComponent,
    UserComponent,
    FoodComponent,
    ClothesComponent,
    StudyComponent,
    RandomDonationComponent,
    QuantityComponent,
    NgoComponent,
    UserComponent,
    AdminPageComponent,
    AdminComponent,
    WidgetsComponent,
    FooterComponent,
    CreateCampaignComponent,
    CreateNgoComponent,
    CreateUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [DonorService,NgoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
