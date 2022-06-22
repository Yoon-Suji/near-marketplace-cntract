import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

// @nearBindgen decorator to serialize our custom class before storing it on the blockchain
@nearBindgen
export class Product {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    price: u128; //u128 price field allows us to store the NEAR price in yocto (smallest unit of NEAR)
    owner: string;
    sold: u32;
    public static fromPayload(payload: Product): Product {
        const product = new Product();
        product.id = payload.id;
        product.name = payload.name;
        product.description = payload.description;
        product.image = payload.image;
        product.location = payload.location;
        product.price = payload.price;
        product.owner = context.sender; // context object contains additional information about the transaction
        // context.sender to retrive the account id of the account that is calling the function
        return product;
    }
    public incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
}

export const listedProducts = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");