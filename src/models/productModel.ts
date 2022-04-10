import { Status } from '@/base/constants';
import Entity from './entity';
import Image from './image';
import Option from './option';
import Variant from './variant';

export default class ProductModel extends Entity {
    title: string = null;
    body_html: string = null;
    vendor: string = null;
    product_type: string = null;
    published_at: Date = null;
    template_suffix: string = null;
    status: Status = null;
    published_scope: string = null;
    tags: string = null;

    image: Image = null;
    images: Image[] = [];
    options: Option[] = [];
    variants: Variant[] = [];

    get isActive(): boolean {
        return this.status === Status.ACTIVE;
    }

    get tagList(): string[] {
        return this.tags?.split(', ');
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    constructor(data?: any) {
        super();

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                (this as any)[key] = data[key];
            }
        }
    }
}
