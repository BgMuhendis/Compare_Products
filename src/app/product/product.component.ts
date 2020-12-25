import { Component, OnInit ,Input} from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  public title:string="compare products";
  public keep:Number[]=[];
  public product_compare:Product[]=[];
  products:Product[]=[
    {id:0,name:"cherry",price:1.99,feature:"two cherries",imageUrl:"assets/images/cherry.png",compare:"COMPARE",condinition:"Fresh",span:["c-red","c-green","c-blue"]},
    {id:1,name:"orange",price:2.99,feature:"giant orange",imageUrl:"assets/images/orange.png",compare:"COMPARE",condinition:"Frozen",span:["c-green","c-blue"]},
    {id:2,name:"nuts",price:1.00,feature:"mixed nuts",imageUrl:"assets/images/nuts.png",compare:"COMPARE",condinition:"Frozen",span:["c-red"]},
    {id:3,name:"strawberry",price:1.49,feature:"just strawberry",imageUrl:"assets/images/Strawberry.png",compare:"COMPARE",condinition:"Fresh",span:["c-blue"]}
  ]
  ngOnInit(): void {
  }
 compare(product){
   if(product.compare=="COMPARE"){
      product.compare="REMOVE";
      if(this.product_compare.length==0){
        this.product_compare.splice(this.product_compare.length,0,this.products[product.id]);
        this.keep.splice(this.keep.length,0,product.id);
      }
      else if(this.product_compare.length>=1){
              this.keep.splice(this.keep.length,0,product.id);
              this.keep.sort();
              this.product_compare.splice(this.keep.indexOf(product.id),0,this.products[product.id]); 
      }
  }  
  else{
    product.compare="COMPARE";
    for(let i of this.product_compare){
      if(i.id==product.id){
        this.keep.splice(this.keep.indexOf(product.id),1)
        this.keep.sort();
        this.product_compare.splice(this.product_compare.indexOf(i),1);
      }

    }
     
     
  }
}
}
