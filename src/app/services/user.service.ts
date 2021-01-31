import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl:string;
  id:number=0;

  constructor(private http:HttpClient) {
    this.userUrl='http://localhost:8080/users';
   }

   public findAll():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user:User){
    return this.http.post<User>(this.userUrl,user);
  }

  public findById(id:number):Observable<User>{
    return this.http.get<User>(this.userUrl+"/"+id);
    }
    public deleteById(user_id:number):Observable<User>{
      return this.http.delete<User>(this.userUrl+"/"+Number(user_id));
      }
  
}
