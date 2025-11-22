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
    .food {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;
        padding: 15px;
        border-radius: 20px;
        background: white;
        gap: 10px;
    }

    .food__image-container {
        min-width: 80px;
        text-align: center;
    }

    .food__image {
        max-width: 80px;
        max-height: 80px;
        border-radius: 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .food__title {
        font-weight: bold;
        font-size: 1em;
        margin-bottom: 5px;
    }

    .food__description {
        font-size: 0.8rem;
        opacity: 0.6;
        margin-bottom: 5px;
    }

    .food__price {
        color: var(--primary-color);
    }

    .food__details {
        width: 100%;
    }

</style>