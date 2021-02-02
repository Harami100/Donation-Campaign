import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NgoRequirement } from '../classes/ngo-requirement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoRequirementService {

  private ngoRequirementsUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.ngoRequirementsUrl='http://localhost:8080/api/ngoRequirements';
   }

   public findAll():Observable<NgoRequirement[]>{
    return this.http.get<NgoRequirement[]>(this.ngoRequirementsUrl);
  }

  public save(ngoRequirement:NgoRequirement){
    return this.http.post<NgoRequirement>(this.ngoRequirementsUrl,ngoRequirement);
  }

  public findById(id:number):Observable<NgoRequirement>{
    return this.http.get<NgoRequirement>(this.ngoRequirementsUrl+"/"+id);
  }

  public deleteById(ngorequirement_id:number):Observable<NgoRequirement>{
    return this.http.delete<NgoRequirement>(this.ngoRequirementsUrl+"/"+Number(ngorequirement_id));
  }
}