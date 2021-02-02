import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Donation } from '../classes/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.donationUrl='http://localhost:8080/api/donations';
   }

   public findAll():Observable<Donation[]>{
    return this.http.get<Donation[]>(this.donationUrl);
  }

  public save(donation:Donation){
    return this.http.post<Donation>(this.donationUrl,donation);
  }

  public findById(id:number):Observable<Donation>{
    return this.http.get<Donation>(this.donationUrl+"/"+id);
  }

  public deleteById(donation_id:number):Observable<Donation>{
    return this.http.delete<Donation>(this.donationUrl+"/"+Number(donation_id));
  }

  //sum method remaining
}