import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl: string = "http://localhost:8080/api/products"

  // injection por detras 
  constructor(private httpclient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{


    // TODO: need to build url bases on category id will come back to this
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpclient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
			

} interface GetResponse {

  _embedded: { products: Product[]; }

}