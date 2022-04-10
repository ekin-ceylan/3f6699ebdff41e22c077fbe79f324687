import ProductModel from '@/models/productModel';
import { service } from './service';

const products: ProductModel[] = [];
const url = 'https://teknasyon.netlify.app/.netlify/functions/products';
const token = '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';

export async function getAllProducts(): Promise<ProductModel[]> {
    if (!products.length) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': token,
            },
        } as RequestInit;

        const response = await service(url, options);

        for (const product of response.products) {
            products.push(new ProductModel(product));
        }
    }

    return products;
}

export async function getProductsById(id: number): Promise<ProductModel> {
    return (await getAllProducts())?.find(x => x.id === id);
}
