import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Donor } from '../classes/donor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private donorUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.donorUrl='http://localhost:8080/api/donors';
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
  
}
