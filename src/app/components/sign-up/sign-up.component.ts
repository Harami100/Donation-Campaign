import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../../services/donor.service';
import { Donor } from '../../classes/donor';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  donorForm!: FormGroup;
  donor:Donor;
  donor_confirmpassword:string="";
  

  constructor(private route: ActivatedRoute, private router: Router, public donorService: DonorService) {
    this.donor=new Donor();
   }

   register() {
    this.donorService.save(this.donor).subscribe(result => this.login());
    alert("You are registered successfully...Please login yourself...");
    this.router.navigate(['login']);

  }

  

  login() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {

  }

}




