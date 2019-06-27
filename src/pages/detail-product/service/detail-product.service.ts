import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../models/product.model';
import { environment } from '../../../environment/environment';

@Injectable()
export class DetailProductService {

    constructor(private httpClient: HttpClient) { }

    /**
   * @param  string É o caminho complementar da URL padrão
   * @param  number paramsParametro passado como id
   * @returns Observable<Product>
   */
    getRequest(complement: string, params: number): Observable<Product> {
        return this.httpClient.get<Product>(`${environment.API_URL}/${complement}/${params}`, { headers: environment.headers });
    }

}