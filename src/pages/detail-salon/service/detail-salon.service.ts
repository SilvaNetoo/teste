import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environment/environment';
import { Establishment } from '../../../models/establishment.model';

@Injectable()
export class DetailSalonService {

    constructor(private httpClient: HttpClient) { }

    /**
   * @param  string É o caminho complementar da URL padrão
   * @param  number paramsParametro passado como id
   * @returns Observable<Product>
   */
    getRequest(complement: string, params: number): Observable<Establishment> {
        return this.httpClient.get<Establishment>(`${environment.API_URL}/${complement}/${params}`, { headers: environment.headers });
    }

}