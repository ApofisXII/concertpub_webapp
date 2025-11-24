<script lang="ts">
	import Food from '$lib/components/Food.svelte';
    import { categories } from '$lib/database/categories';
	import { MenuEntry } from '$lib/models/menu-entry';
    import { Search } from '@lucide/svelte/icons';

    // Fill database with products
    let products :MenuEntry[] = $state<MenuEntry[]>([]);
    categories.forEach(function (category) {
        import(`../lib/database/${category.slug}.ts`).then(foodsModule => {
            products = [...products, ...foodsModule.foods];
        });
    });

    let filteredProducts :MenuEntry[] = $state<MenuEntry[]>([]);
    let searchText = $state("");

    $effect(() => {
        if (searchText.length > 0) {
            const lowerSearchText = searchText.toLowerCase();
            filteredProducts = products.filter(product => 
                product.title.toLowerCase().includes(lowerSearchText) ||
                product.description?.toLowerCase().includes(lowerSearchText)
            );
        } else {
            filteredProducts = [];
        }
    });

</script>

<div class="container">
    <h1>Menu</h1>

    <div class="search">
        <input class="search__input" bind:value={searchText} placeholder="Cerca nel menu..." type="text" id="input-search">
        <div class="search__icon">
            <Search />
        </div>
    </div>

    {#if searchText.length > 0}

        {#if filteredProducts.length === 0}
            <p>Nessun risultato per "{searchText}"</p>
        {:else}
            {#each filteredProducts as food}
                <Food {food} />
            {/each}
        {/if}
    {:else}
        {#each categories as category}
            <a href="/categories/{category.slug}" class="category">
                <div class="category__left">
                    <category.icon />
                </div>
                <div>
                    <span class="category__title">{category.title}</span>
                    <span class="category__subtitle">{category.subtitle}</span>
                </div>
            </a>
        {/each}
    {/if}
    
</div>

<style>

    .category {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        border-radius: 10px;
        text-decoration: none;
        margin-bottom: 15px;
        background-color: white;
        box-shadow: 0 2px 14px rgba(0, 0, 0, 0.05);
    }

    .category__title {
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .category__subtitle {
        font-size: 0.9rem;
        opacity: 0.6;
    }

    .category__left {
        padding: 10px;
        color: var(--primary-color);
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        background-color: white;
        border-radius: 10px;
        padding: 10px 15px;
        border: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .search__input {
        width: 100%;
        border: none;
        padding: 5px;
    }

</style>