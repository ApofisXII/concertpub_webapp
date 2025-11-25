import type { MenuEntry } from "$lib/models/menu-entry";
import { categories } from "$lib/database/categories";
import type { Category } from "$lib/models/menu-category";

export async function load({ params }) {
    let category: Category | undefined = categories.find(cat => cat.slug === params.slug);
    if (!category) {
        throw new Error(`Category with slug "${params.slug}" not found.`);
    }

    let products: any[] = [];

    let module = await import(`$lib/database/${category!.slug}.ts`);
    let productsObjects :MenuEntry[] = module.foods;

    for (const product of productsObjects) {
        products.push(product.toJSON());
    }

    return {
        products: products,
    };
}