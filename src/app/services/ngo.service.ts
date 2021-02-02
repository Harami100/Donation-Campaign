import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Ngo } from '../classes/ngo';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NgoService {
  private ngoUrl:string;
  id:number=0;

  private loggedIn = new BehaviorSubject<boolean>(false); 


  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  constructor(private http:HttpClient, private router: Router) {
    this.ngoUrl='http://localhost:8080/api/ngos';
   }

   login(user: Ngo){
    if (user.ngo_email !== '' && user.ngo_password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  
  logout() {
  this.loggedIn.next(false);
  this.router.navigate(['/login']);
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

      public getCountNgos():Observable<any>{
        return this.http.get('http://localhost:8080/api/totalNumberOfNgo');
      } 



  
}
