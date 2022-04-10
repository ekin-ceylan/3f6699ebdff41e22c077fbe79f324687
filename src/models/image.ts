import Entity from './entity';

export default class Image extends Entity {
    product_id: number = null;
    position: number = null;
    alt: string = null;
    width: number = null;
    height: number = null;
    src: string = null;
    variant_ids: number[] = [];
}
