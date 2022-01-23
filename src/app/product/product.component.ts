import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]//local service
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }
   title="Ürün Listesi";
   filterText="";
   products!:Product[];
 
  ngOnInit(): void {
    // this.http.get<Product[]>(this.path).subscribe(data=>{
    //   this.products=data;
    // });
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      });
    });
   
  }
  addToCart(product:Product)
  {
    //alert("Sepete eklendi "+product.name);
   // alertify.success(product.name+"added");
      this.alertifyService.success(product.name+" added")
  }
}
