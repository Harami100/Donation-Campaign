import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 

  isOpen : boolean = false;

  toggelNavBar()
  {
    this.isOpen = !this.isOpen;
  }

  isLoggedIn$!: Observable<boolean>;


  constructor(private donorService: DonorService) { }

  ngOnInit() {
   this.isLoggedIn$ = this.donorService.isLoggedIn;
   
  }

  onLogout(){
    this.donorService.logout();
  }


}
