import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products-service.service';
import { Produto } from './interfaces/produto';
import { BaseResponse } from './interfaces/baseresponse';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public listProducts:Array<Produto>;
  public countResult:number;
  public messageResult:string;

  constructor(private products:ProductsService){ 
    this.clearState();
  }
  
  ngOnInit(): void {}

  searchProduct(terms:any){
    this.clearState();
    this.getProducts(terms);
  }
  
  clearState(){
    this.messageResult = '';
    this.listProducts  = [];
    this.countResult   = 0;
  }

  getProducts(terms:string): void {
    let pTerms = (terms)?`?terms=${terms}`:'';
    this.products.getProducts(pTerms)
        .subscribe((resp:HttpResponse<BaseResponse>) => {
          if(resp.status == 200){
            this.listProducts = resp.body.data;
            this.countResult = resp.body.data.length;
          
            if(this.countResult == 0){
              this.messageResult = "Nenhum resultado encontrado...";
            }
          }
    },(erro:HttpResponse<any>) => {
      if(erro.status==400){
        this.messageResult = "Nenhum resultado encontrado...";
      }
    });
  }
}
