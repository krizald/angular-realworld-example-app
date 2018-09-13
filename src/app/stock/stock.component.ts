import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stock } from '../core/models';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() public stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Apple', 'AAPL', 100, 110, false);
  }

}
