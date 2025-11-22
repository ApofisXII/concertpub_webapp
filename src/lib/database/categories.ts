import { Beer, Pizza, Utensils, Popsicle } from "@lucide/svelte";
import { Category } from "../models/category";

export const categories: Category[] = [
    new Category(Beer, 'bottle-beers', 'Birre in bottiglia', 'Accontentano anche i bevitori più esotici'),
    new Category(Pizza, 'bites', 'Stuzzicherie', 'Per una voglia colpevole di frittini'),
    new Category(Utensils, 'plates', 'Piatti', 'Certo, ci crediamo tutti che non hai cenato...'),
    new Category(Popsicle, 'desserts', 'Dolcini', 'Per chiudere in dolcezza'),
];