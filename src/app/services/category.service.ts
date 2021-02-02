import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Category } from '../classes/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.categoryUrl='http://localhost:8080/api/categories';
   }

   public findAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl);
  }

  public save(category:Category){
    return this.http.post<Category>(this.categoryUrl,category);
  }

  public findById(id:number):Observable<Category>{
    return this.http.get<Category>(this.categoryUrl+"/"+id);
    }

  public deleteById(category_id:number):Observable<Category>{
    return this.http.delete<Category>(this.categoryUrl+"/"+Number(category_id));
    }

  public getCountSubCategory(){
    return this.http.get('http://localhost:8080/api/totalNumberOfCategory');
  }
}