import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environment/environment';
import { Establishment } from '../../../models/establishment.model';

@Injectable()
export class InitService {

    constructor(private httpClient: HttpClient) { }

    /**
   * @param  string complement 
   * @returns Observable<Product>
   */
    getRequest(complement: string): Observable<Array<Establishment>> {
        return this.httpClient.get<Array<Establishment>>(`${environment.API_URL}/${complement}`, { headers: environment.headers });
    }

}