<script lang="ts">  
	import Food from '$lib/components/Food.svelte';
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
        <Food {food} />
    {/each}

</div>

<style>
    
</style>