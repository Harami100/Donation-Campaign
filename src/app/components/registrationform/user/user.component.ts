import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';


import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  user:User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {

    this.user=new User();
   }


   register() {
    this.userService.save(this.user).subscribe(result => this.login());
    alert("You are registered successfully...Please login yourself...");
    this.router.navigate(['login']);

  }

  

  login() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    
  }

}
