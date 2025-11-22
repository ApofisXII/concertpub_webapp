import type { Icon } from "@lucide/svelte";
import type { Component } from "svelte";

class Category {
    icon: Component<Icon>;
    slug: string;
    title: string
    subtitle: string;

    constructor(icon: Component<Icon>, slug: string, title: string, subtitle :string) {
        this.icon = icon;
        this.slug = slug;
        this.title = title;
        this.subtitle = subtitle;
    }
}

export { Category };