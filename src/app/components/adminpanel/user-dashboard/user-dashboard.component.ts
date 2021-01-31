import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user:any=[];

  constructor(private userservice:UserService) { }
  getUserData()
  {
    this.userservice.findAll().subscribe((res)=>{
      this.user=res
    })
  }

  delete(user_id: number)
  {
    console.log(user_id);
    this.userservice.deleteById(Number(user_id)).subscribe((res)=>{ 
      this.getUserData()
    })
    alert("User deleted successfully")
    this.getUserData()
  }

  ngOnInit(): void {
    this.getUserData()
  }

}
