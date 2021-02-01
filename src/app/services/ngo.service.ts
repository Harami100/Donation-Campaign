import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Ngo } from '../classes/ngo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  private ngoUrl:string;
  id:number=0;

  constructor(private http:HttpClient) {
    this.ngoUrl='http://localhost:8080/api/ngos';
   }

   public findAll():Observable<Ngo[]>{
    return this.http.get<Ngo[]>(this.ngoUrl);
  }

  public save(ngo:Ngo){
    return this.http.post<Ngo>(this.ngoUrl,ngo);
  }

  public findById(id:number):Observable<Ngo>{
    return this.http.get<Ngo>(this.ngoUrl+"/"+id);
    }
    public deleteById(ngo_id:number):Observable<Ngo>{
      return this.http.delete<Ngo>(this.ngoUrl+"/"+Number(ngo_id));
      }
  
}
