import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from './../../services/donor.service';
import { UserService } from './../../services/user.service';
import { NgoService } from './../../services/ngo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  //private formSubmitAttempt: boolean;
  //isLoggedIn : boolean = true;
  emailId!:string;
  password!:string;
  donor:any=[];
  user:any=[];
  ngo:any=[];
  act:string="";

  i:number=0;

  constructor(private route: ActivatedRoute, private router: Router, private donorService: DonorService, private userService: UserService, private ngoService: NgoService) { 
  }

  //Roles: any= ['Admin','User','Donor','NGO'];

  getDonorData()
  {
    this.donorService.findAll().subscribe((res)=>{
      this.donor=res;
    })
  }

  getUserData()
  {
    this.userService.findAll().subscribe((res)=>{
      this.user=res;
    })
  }

  getNgoData()
  {
    this.ngoService.findAll().subscribe((res)=>{
      this.ngo=res;
    })
  }

  getRole(event: any) {
    console.log(event.target.id);
    this.act=event.target.id;
  }
// login()
// {
//   for(this.i=0;this.i<this.donor.length;this.i++)
//       {
//         if(this.loginForm.value.emailId==this.donor[this.i].donor_email && this.loginForm.value.password==this.donor[this.i].donor_password)
//         {
//           alert("Donor logged in successfully");
//           this.router.navigateByUrl("home");
//           break;
//         }
//         else if(this.loginForm.value.emailId!=this.donor[this.i].donor_email && this.loginForm.value.password!=this.donor[this.i].donor_password)
//         {
//           this.router.navigateByUrl("signup");
//           alert("please register yourself...or recheck email and password"); 
//         }
//       }
// }
  login()
  {

    //this.isLoggedIn = !this.isLoggedIn;
    
      if(this.act=="Admin" && this.loginForm.value.emailId=="admin@gmail.com" && this.loginForm.value.password=="Admin123")
      {
        alert("Admin logged in successfully");
        this.router.navigateByUrl("admin");
      }
    else if(this.act=="Donor")
    {
      for(this.i=0;this.i<this.donor.length;this.i++)
      {
        if(this.loginForm.value.emailId==this.donor[this.i].donor_email && this.loginForm.value.password==this.donor[this.i].donor_password)
        {
          alert("Donor logged in successfully");
          
          if (this.loginForm.valid) {
            this.donorService.login(this.loginForm.value);
          }
          //this.router.navigateByUrl("home");
          break;
        }
        else if(this.loginForm.value.emailId!=this.donor[this.i].donor_email && this.loginForm.value.password!=this.donor[this.i].donor_password)
        {
          this.router.navigateByUrl("signup");
         // alert("please register yourself...or recheck email and password"); 
        }
      }
    }
    else if(this.act=="User")
    {
      for(this.i=0;this.i<this.user.length;this.i++)
      {
        if(this.loginForm.value.emailId==this.user[this.i].user_email && this.loginForm.value.password==this.user[this.i].user_password)
        {
          alert("User logged in successfully");
          
          if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value);
          }
          
          //this.router.navigateByUrl("home");
          break;
        }
        else if(this.loginForm.value.emailId!=this.user[this.i].user_email && this.loginForm.value.password!=this.user[this.i].user_password)
        {
          this.router.navigateByUrl("signup");
          //alert("please register yourself...or recheck email and password");         
        }
      }
    }
    else if(this.act=="NGO")
    {
      for(this.i=0;this.i<this.ngo.length;this.i++)
      {
        if(this.loginForm.value.emailId==this.ngo[this.i].ngo_email && this.loginForm.value.password==this.ngo[this.i].ngo_password)
        {
          alert("NGO logged in successfully");
          
          if (this.loginForm.valid) {
            this.ngoService.login(this.loginForm.value);
          }
          
          //this.router.navigateByUrl("home");
          break;
        }
        else if(this.loginForm.value.emailId!=this.ngo[this.i].ngo_email && this.loginForm.value.password!=this.ngo[this.i].ngo_password)
        {
          this.router.navigateByUrl("signup");
        //  alert("please register yourself...or recheck email and password");         
        }
      }
    }
  }


  ngOnInit(): void {
  // this.isLoggedIn = !this.isLoggedIn;
    this.getDonorData();
    this.getUserData();
    this.getNgoData();
    this.loginForm=new FormGroup({
      emailId:new FormControl(""),
      password:new FormControl("")
    })
  }

}