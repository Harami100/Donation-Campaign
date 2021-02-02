import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Donor } from '../classes/donor';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private donorUrl:string;
  id:number=0;

  private loggedIn = new BehaviorSubject<boolean>(false); 


  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  constructor(private http:HttpClient, private router:Router) {
    this.donorUrl='http://localhost:8080/api/donors';
   }
   login(user: Donor){
    if (user.donor_email !== '' && user.donor_password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  
  logout() {
  this.loggedIn.next(false);
  this.router.navigate(['/login']);
}



   public findAll():Observable<Donor[]>{
    return this.http.get<Donor[]>(this.donorUrl);
  }

  public save(donor:Donor){
    return this.http.post<Donor>(this.donorUrl,donor);
  }

  public findById(id:number):Observable<Donor>{
    return this.http.get<Donor>(this.donorUrl+"/"+id);
    }

    public deleteById(donor_id:number):Observable<Donor>{
      return this.http.delete<Donor>(this.donorUrl+"/"+Number(donor_id));
      }

      public getCountDonors():Observable<any>{
        return this.http.get('http://localhost:8080/api/totalNumberOfDonor');
      } 
    
  
}
