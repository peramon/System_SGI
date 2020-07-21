import StoreItem from '../store-item/store-item.interface';
import ItemCategory from './item-categories.interface';
export default interface ItemInterface {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    img: any;
    categories: ItemCategory[];
    store_items: StoreItem[];
}
