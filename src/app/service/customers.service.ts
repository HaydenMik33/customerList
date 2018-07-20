import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) {}
    
    getAllCustomers(){
      return this.http.get('/customers').pipe(map(customers=>{
         return customers;
      }))
    }

    
   
}
