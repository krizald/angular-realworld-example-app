import { NgModule } from '@angular/core';
import { StockComponent } from './stock.component';
import { StockService } from '../core';

@NgModule({
    imports: [
    ],
    declarations: [
        StockComponent
    ],

    providers: [
        StockService
    ]
  })
  export class StockModule {}
