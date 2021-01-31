import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  constructor(private route: ActivatedRoute, private router: Router){}


selectedCategory:string='';

 CategoryList: Array<any> = [
  { name: 'FOOD', subcategories: ['Wheat (kg)', 'Rice(kg)', 'Dal(kg)','Packed Food','Other'] },
  { name: 'CLOTHES', subcategories: ['For Men','For Women','For Children','blankets','other'] },
  { name: 'STUDY MATERIAL', subcategories: ['Books','Notebooks','Pens ','Bags ','other'] }

];
  subcategories: Array<any> = [];
 

selectChangeHandler(event: any) {
    this.subcategories = this.CategoryList.find(con => con.name == event.target.value).subcategories;
  }

  donate(){
    alert("donation successful");
    this.router.navigate(['home']);

  }

}
