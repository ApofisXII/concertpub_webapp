export class MenuEntry {
    title: string;    
    priceCents: number;
    description?: string;
    imagePath?: string;

    constructor(title: string, priceCents: number, description?: string, imagePath?: string) {
        this.title = title;
        this.priceCents = priceCents;
        this.description = description;
        this.imagePath = imagePath;
    }

    getPriceFormatted(): string {
        return (this.priceCents / 100).toFixed(2).replace('.', ',') + " €";
    }
}