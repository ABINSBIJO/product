import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }


  fetchdatafromjson()
  {
    return this.http.get<any>('https://dummyjson.com/products')
  }
}
