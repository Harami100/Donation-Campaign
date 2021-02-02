import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl:string;
  id:number=0;

  private loggedIn = new BehaviorSubject<boolean>(false); 


  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  constructor(private http:HttpClient, private router:Router) {
    this.userUrl='http://localhost:8080/api/users';
   }

   login(user: User){
    if (user.user_email !== '' && user.user_password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  
  logout() {
  this.loggedIn.next(false);
  this.router.navigate(['/login']);
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

      public getCountUsers():Observable<any>{
        return this.http.get('http://localhost:8080/api/totalNumberOfUser');
      } 



  
}
