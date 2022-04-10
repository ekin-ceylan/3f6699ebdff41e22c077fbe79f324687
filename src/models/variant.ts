import Entity from './entity';

export default class Variant extends Entity {
    product_id: number = null;
    title: string = null;
    price: string = null;
    sku: string = null;
    position: number = null;
    inventory_policy: string = null;
    compare_at_price: string = null;
    fulfillment_service: string = null;
    inventory_management: string = null;
    option1: string = null;
    option2: string = null;
    option3: string = null;
    taxable: boolean = true;
    barcode: string = '012356011005';
    grams: number = 11340;
    image_id: number = 36706924069083;
    weight: number = 25.0004;
    weight_unit: string = 'lb';
    inventory_item_id: number = 44603793932507;
    inventory_quantity: number = 0;
    old_inventory_quantity: number = 0;
    requires_shipping: boolean = true;
}
