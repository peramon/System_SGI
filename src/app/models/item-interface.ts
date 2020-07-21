import { StoreInterface } from './store-interface';
export interface ItemInterface{
    "id": string;
    "name": string;
    "description": string;
    "store_items": [StoreInterface];
}