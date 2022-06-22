import { Product, listedProducts } from './model';

/* The string PRODUCTS in the PersistentUnorderedMap's constructor is the unique prefix to use for every key.
    Warning: The key for the persistent collection should be as short as possible 
    to reduce storage space because this key will be repeated for every record in the collection. 
    Here, we only used the longer PRODUCTS key to add more readability for first-time NEAR developers.
*/
export function setProduct(product: Product): void {
    let storedProduct = listedProducts.get(product.id);
    if (storedProduct !== null) {
        throw new Error(`a product with ${product.id} already exists`);
    }
    listedProducts.set(product.id, Product.fromPayload(product));
}

export function getProduct(id: string): Product | null {
    return listedProducts.get(id);
}

export function getProducts(): Product[] {
    return listedProducts.values();
}