import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from './jwt.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class StockService {
    private path = '/datasets/WIKI';

    constructor(private apiKey: string, private http: HttpClient, ) {
        this.apiKey = 'oHdbZRAPAxmzKJvaFDJS';
    }

    getStockPrice(tick: string): Observable<any> {
        const params = {};
        return this.http.get(`${environment.quandl_url}${this.path}/${tick}/data.json?api_key=${this.apiKey}`, { params });
    }
}
