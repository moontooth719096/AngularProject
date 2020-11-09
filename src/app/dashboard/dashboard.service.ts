import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',

})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getStockInfo(){
     return this.http.get<any[]>('https://localhost:44318/stockinfo/');
  }

  updateStockInfo(updatedata:StockUpdate){
    return this.http.put<any[]>('https://localhost:44318/stockinfo/',updatedata);
  }
}

interface StockUpdate{
  StockID:string,
  Status:number
}