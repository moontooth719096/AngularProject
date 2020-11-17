import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, ReplaySubject } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Stockinfo } from '../ClassModels/Stockinfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public stocklist$: Observable<Stockinfo[]> = new ReplaySubject(1); 

  constructor(private service:DashboardService) {
  }
  ngOnInit() {
    this.stocklist$ = this.service.getStockInfo();
  }

  StockEdit(stockID:string,status:number){
      
  }
}