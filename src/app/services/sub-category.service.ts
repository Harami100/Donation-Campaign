import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubCategory } from '../classes/sub-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private subCategoryUrl:string;
  id:number=0;


  constructor(private http:HttpClient) {
    this.subCategoryUrl='http://localhost:8080/api/subcategories';
   }

   public findAll():Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.subCategoryUrl);
  }

  public save(subcategory:SubCategory){
    return this.http.post<SubCategory>(this.subCategoryUrl,subcategory);
  }

  public findById(id:number):Observable<SubCategory>{
    return this.http.get<SubCategory>(this.subCategoryUrl+"/"+id);
    }

  public deleteById(subcategory_id:number):Observable<SubCategory>{
    return this.http.delete<SubCategory>(this.subCategoryUrl+"/"+Number(subcategory_id));
    }

  public getCountSubCategory(){
    return this.http.get('http://localhost:8080/api/totalNumberOfSubCategory');
  }
}