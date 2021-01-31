import { Component, OnInit } from '@angular/core';
import { NgoService } from '../../../services/ngo.service';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css']
})
export class NgoDashboardComponent implements OnInit {

  ngo:any=[];

  constructor(private ngoservice:NgoService) { }
  getNgoData()
  {
    this.ngoservice.findAll().subscribe((res)=>{
      this.ngo=res
    })
  }

  delete(ngo_id: number)
  {
    console.log(ngo_id);
    this.ngoservice.deleteById(Number(ngo_id)).subscribe((res)=>{ 
      this.getNgoData()
    })
    alert("NGO deleted successfully")
    this.getNgoData()
  }

  ngOnInit(): void {
    this.getNgoData()
  }

}
