import { MenuEntry } from "$lib/models/menu-entry.ts";

export const foods: MenuEntry[] = [
    new MenuEntry("Focaccia Farcita", 450, "Prosciutto e mozzarella, al forno", 'focaccia-farcita.jpg'),
    new MenuEntry("Pasta Cacio & Pepe", 450, "Fatta al momento dallo chef", 'cacio-pepe.png'),
    new MenuEntry("Pasta aglio, olio e peperoncino", 400, "Fatta al momento dallo chef", 'aglio-olio.png'),
];