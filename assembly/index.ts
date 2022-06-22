import { PersistentUnorderedMap } from "near-sdk-as";

/* The string PRODUCTS in the PersistentUnorderedMap's constructor is the unique prefix to use for every key.
    Warning: The key for the persistent collection should be as short as possible 
    to reduce storage space because this key will be repeated for every record in the collection. 
    Here, we only used the longer PRODUCTS key to add more readability for first-time NEAR developers.
*/
export const products = new PersistentUnorderedMap<string, string>("PRODUCTS");

// add a new product to products map
export function setProduct(id: string, productName: string): void {
    products.set(id, productName);
}

// we can return either a product name or null if the product doesn't exist.
export function getProduct(id: string): string | null {
    return products.get(id);
}