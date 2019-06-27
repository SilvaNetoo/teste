import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environment/environment';
import { Establishment } from '../../../models/establishment.model';

@Injectable()
export class ListEstablishmentService {

    constructor(private httpClient: HttpClient) { }

    /**
    * @param  complete Complemento da url a ser buscada     
    * @param  param Parâmetro a ser buscado
    * @returns Observable<Product>
    */
    getRequest(complement: string, param: string): Observable<Array<Establishment>> {
        return this.httpClient.get<Array<Establishment>>(`${environment.API_URL}/${complement}/${param}`, { headers: environment.headers });
    }



}