import { Component, OnInit } from '@angular/core';
import { Random } from '../../classes/random';
import { RandomService } from 'src/app/services/random.service';


import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.css']
})
export class RdComponent implements OnInit {

  random:Random;
  constructor(private route: ActivatedRoute, private router: Router, private randomService: RandomService) {

    this.random=new Random();
   }


  

  ngOnInit(): void {
  }

  donate1(){
    alert("donation successful");
    this.router.navigate(['home']);

  }

  
  register() {
    this.randomService.save(this.random).subscribe(result => this.donate1());
    // alert("You are registered successfully...Please login yourself...");
    this.router.navigate(['home']);

  }


}