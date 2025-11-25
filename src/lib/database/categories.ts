import { Beer, Pizza, Utensils, Popsicle } from "@lucide/svelte";
import { MenuCategory } from "$lib/models/menu-category";

export const categories: MenuCategory[] = [
    new MenuCategory(Beer, 'bottle-beers', 'Birre in bottiglia', 'Accontentano anche i bevitori più esotici'),
    new MenuCategory(Pizza, 'bites', 'Stuzzicherie', 'Per una voglia colpevole di frittini'),
    new MenuCategory(Utensils, 'plates', 'Piatti', 'Certo, ci crediamo tutti che non hai cenato...'),
    new MenuCategory(Popsicle, 'desserts', 'Dolcini', 'Per chiudere in dolcezza'),
];