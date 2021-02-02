import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Random } from '../classes/random';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  // private RandomUrl:string;
  id:number=0;
  
  constructor(private http:HttpClient) {
    // this.RandomUrl='http://localhost:8080/api/get';
   }

   public findAll():Observable<Random[]>{
    return this.http.get<Random[]>('http://localhost:8080/api/get');
  }

  public save(random:Random){
    return this.http.post<Random>('http://localhost:8080/api/add',random);
  }

}