import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateproduct(productsId: any) {
    throw new Error('Method not implemented.');
  }
  productId(productId: any) {
    throw new Error('Method not implemented.');
  }

  BaseUrl = 'http://localhost:3000/'

  constructor( private httpClient: HttpClient) { }

   postProduct( userObj: any ){
     return this.httpClient.post( this.BaseUrl + 'productsList/', userObj);
   }
   getProduct(){
     return this.httpClient.get(this.BaseUrl + 'productsList/');

   }
   usersId(id:any) {
    return  this.httpClient.get( this.BaseUrl + 'productsList/' + id);
  }
   
   Updateproduct(id: any, userObj: any){
     return this.httpClient.put(this.BaseUrl + 'productsList/'+ id, userObj);
    }

  
}
