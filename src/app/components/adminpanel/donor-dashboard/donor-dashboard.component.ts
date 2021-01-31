import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../../services/donor.service';

@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit {

  donor:any=[];

  constructor(private donorservice:DonorService) { }
  getDonorData()
  {
    this.donorservice.findAll().subscribe((res)=>{
      this.donor=res
    })
  }

  delete(donor_id: number)
  {
    console.log(donor_id);
    this.donorservice.deleteById(Number(donor_id)).subscribe((res)=>{ 
      this.getDonorData()
    })
    alert("Donor deleted successfully")
    this.getDonorData()
  }

  ngOnInit(): void {
    this.getDonorData()
  }

}
