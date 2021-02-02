import { Component, OnInit } from '@angular/core';

import { DonorService } from './../../../services/donor.service';
import { UserService } from './../../../services/user.service';
import { NgoService } from './../../../services/ngo.service';


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  cntDonor!:number;
  cntUser!:number;
  cntNgo!:number;

  

  constructor( private donorService: DonorService, private userService: UserService, private ngoService: NgoService) { }

  getDonorRegCnt(){
    this.donorService.getCountDonors().subscribe((res)=>{
      this.cntDonor=res;
     // console.log(this.cntDonor);
    })
  }

  getNgoRegCnt(){
    this.ngoService.getCountNgos().subscribe((res)=>{
      this.cntNgo=res;
     // console.log(this.cntDonor);
    })
  }

  getUserRegCnt(){
    this.userService.getCountUsers().subscribe((res)=>{
      this.cntUser=res;
     // console.log(this.cntDonor);
    })
  }

  ngOnInit(): void {
    this.getDonorRegCnt();
    this.getUserRegCnt();
    this.getNgoRegCnt();
  }
  
}
