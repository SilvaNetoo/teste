import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environment/environment';
import { Service } from '../../../models/service.model';

@Injectable()
export class DetailServiceService {

    constructor(private httpClient: HttpClient) { }

    /**
   * @param  string É o caminho complementar da URL padrão
   * @param  number paramsParametro passado como id
   * @returns Observable<Service>
   */
    getRequest(complement: string, params: number): Observable<Service> {
        return this.httpClient.get<Service>(`${environment.API_URL}/${complement}/${params}`, { headers: environment.headers });
    }

}