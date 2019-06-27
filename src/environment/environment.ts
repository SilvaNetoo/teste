import { HttpHeaders } from "@angular/common/http";

export const environment = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }),
    API_URL: 'http://192.168.1.10:8080',
    establishment: 'establishments',
    establishmentSearch: 'establishments/search',
    establishmentCategory: 'establishments/category',
    product: 'products',
    service: 'services'
};