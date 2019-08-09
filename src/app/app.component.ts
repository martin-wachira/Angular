import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  stocks: Array<StockInterface>;
  constructor(service: StocksService){
    service.load({'AAPL'}).subscribe(stocks=>{
      this.stocks = stocks;
    });
  }  
}
