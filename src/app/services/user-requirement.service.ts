import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserRequirement } from '../classes/user-requirement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRequirementService {

  private userRequirementsUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.userRequirementsUrl='http://localhost:8080/api/userRequirements';
   }

   public findAll():Observable<UserRequirement[]>{
    return this.http.get<UserRequirement[]>(this.userRequirementsUrl);
  }

  public save(userRequirement:UserRequirement){
    return this.http.post<UserRequirement>(this.userRequirementsUrl,userRequirement);
  }

  public findById(id:number):Observable<UserRequirement>{
    return this.http.get<UserRequirement>(this.userRequirementsUrl+"/"+id);
  }

  public deleteById(userrequirement_id:number):Observable<UserRequirement>{
    return this.http.delete<UserRequirement>(this.userRequirementsUrl+"/"+Number(userrequirement_id));
  }
}