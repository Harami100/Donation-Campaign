import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgoService } from '../../../services/ngo.service';
import { Ngo } from '../../../classes/ngo';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  ngoForm!: FormGroup;
  ngo:Ngo;

  constructor(private route: ActivatedRoute, private router: Router, private ngoService: NgoService
    ) {this.ngo=new Ngo();
    }

    register() {
      this.ngoService.save(this.ngo).subscribe(result => this.login());
      alert("You are registered successfully...Please login yourself...");
      this.router.navigate(['login']);
  
    }
  
    
  
    login() {
      this.router.navigate(['login']);
    }
  
  ngOnInit(): void {
  }

}



