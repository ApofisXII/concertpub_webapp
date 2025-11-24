import type { MenuEntry } from "$lib/models/menu-entry";
import { categories } from "$lib/database/categories";

export async function load() {
    let products: any[] = [];

    for (const category of categories) {
        let module = await import(`$lib/database/${category.slug}.ts`);
        let productsObjects :MenuEntry[] = module.foods;

        for (const product of productsObjects) {
            products.push(product.toJSON());
        }
    }

    return {
        products: products,
    };
}