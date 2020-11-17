import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockinfo } from '../ClassModels/Stockinfo';
import { Observable } from 'rxjs';


@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }

  getStockInfo():Observable<Stockinfo[]>{
     return this.http.get<Stockinfo[]>('https://localhost:44318/api/Stockinfo');
  }

  updateStockInfo(updatedata:Stockinfo){
    return this.http.put<any[]>('https://localhost:44318/stockinfo/',updatedata);
  }
}