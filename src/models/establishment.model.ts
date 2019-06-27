import { Service } from "./service.model";
import { Product } from "./product.model";

export class Establishment {

    id?: number;
    name: string;
    category: string;
    services: Array<Service>;
    products: Array<Product>;

}