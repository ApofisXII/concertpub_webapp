<script lang="ts">  
    import { categories } from '$lib/database/categories.ts';
    import type { Category } from '$lib/models/category.ts';
	import type { MenuEntry } from '$lib/models/menu-entry.ts';
    let { params } = $props();

    let category: Category | undefined = categories.find(cat => cat.slug === params.slug);
    if (!category) {
        throw new Error(`Category with slug "${params.slug}" not found.`);
    }

    let foods: MenuEntry[] = $state([]);
    import(`../../../lib/database/${category.slug}.ts`).then(foodsModule => {
        foods = foodsModule.foods;
    });
</script>

<svelte:head>
    <title>{category.title} - ConcertPub</title>
</svelte:head>

<div class="container">

    <div class="breadcrumb">
        <a href="/" class="breadcrumb__link">Home</a> \ <span>{category.title}</span>
    </div>

    <h1>{category.title}</h1>

    {#each foods as food}
        <div class="food">
            {#if food.imagePath}
                <div class="food__image-container">
                    <img src="/food-images/{food.imagePath}" alt="Immagine cibo" class="food__image">
                </div>
            {/if}
            <div class="food__details">
                <div class="food__title">{food.title}</div>
                {#if food.description}<div class="food__description">{food.description}</div>{/if}
                <div class="food__price">{food.getPriceFormatted()}</div>
            </div>
        </div>
    {/each}

</div>

<style>
    
</style>