import { NgModule } from '@angular/core';
import { StockComponent } from './stock.component';
import { StockService } from '../core';
import { StockRoutingModule } from './stock-routing.module';

@NgModule({
    imports: [
        StockRoutingModule
    ],
    declarations: [
        StockComponent
    ],

    providers: [
        StockService
    ]
    ,
    exports: [ StockComponent ]
  })
  export class StockModule {}
