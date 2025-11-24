import { MenuEntry } from "$lib/models/menu-entry.ts";

export const foods: MenuEntry[] = [
    new MenuEntry("Nachos con formaggio", 350, "Serviti con salse, fatti al momento", 'nachos.webp'),
    new MenuEntry("Anelli di cipolla", 350, "Pastellati alla birra", 'onion-rings.webp'),
    new MenuEntry("Patatine fritte Twisters", 370, "Fatte al forno, con numerose salse", 'twisters.webp'),
    new MenuEntry("4 pizze quadrate", 420, "Scaldate al forno, leggerissime", 'pizzette.jpg'),
    new MenuEntry("Anelli di formaggio", 390, "Non credo serva descrizione", 'anelli-formaggio.webp'),
    new MenuEntry("Sofficini bacon e patate", 340, "Gusto americato, super morbidi", 'sofficini-americani.jpg'),
    new MenuEntry("Sofficini pomodoro e mozzarella", 250, "Un grande classico al forno", 'sofficini-pomodoro.jpg'),
    new MenuEntry("Nuggets di cavolfiore", 450, "Nuggets croccantissimi vegetali", 'nuggets-cavolfiore.jpg'),
];