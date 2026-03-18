import { MenuEntry } from "$lib/models/menu-entry.ts";

export const foods: MenuEntry[] = [
    new MenuEntry("Nachos con formaggio", 350, "Serviti con salse, fatti al momento", 'nachos.webp'),
    new MenuEntry("Anelli di cipolla", 380, "Pastellati alla birra", 'onion-rings.webp'),
    new MenuEntry("Patatine fritte Twisters", 380, "Fatte al forno, con numerose salse", 'twisters.webp'),
    new MenuEntry("Sofficini pomodoro e mozzarella", 300, "Un grande classico al forno", 'sofficini-pomodoro.jpg'),
];