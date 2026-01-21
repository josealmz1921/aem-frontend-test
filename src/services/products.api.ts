import products from '../data/products.json'
import { type Product } from '../types/Product';

export const getProducts = async (): Promise<Product[]> => {
    return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};