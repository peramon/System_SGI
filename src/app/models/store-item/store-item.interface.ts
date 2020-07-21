import StoreItemStatus from './store-item-status.interface';

export default interface StoreItem {
    id: number;
    acquisition_date: Date;
    name: string;
    description: string;
    img: string;
    status: any;
}
