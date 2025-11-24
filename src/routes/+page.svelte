<script lang="ts">
	import Food from '$lib/components/Food.svelte';
	import { MenuEntry } from '$lib/models/menu-entry';
    import { Search, X } from '@lucide/svelte/icons';
    import type { PageProps } from './$types';
    import { categories } from '$lib/database/categories';

    // Fill database with products
    let { data }: PageProps = $props();
    let products: MenuEntry[] = data.products.map((prod: any) => MenuEntry.fromJson(prod));

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

    function resetSearch() {
        searchText = "";
    }

</script>

<div class="container">
    <h1>Menu</h1>

    <div class="search">
        <div class="search__icon">
            <Search />
        </div>
        <input class="search__input" bind:value={searchText} placeholder="Cerca nel menu..." type="text" id="input-search">
        {#if searchText.length > 0}
            <button class="search__close-btn" onclick={resetSearch}>
                <X />
            </button>            
        {/if}
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
        gap: 5px;
        background-color: white;
        border-radius: 10px;
        padding: 10px 15px;
        margin-bottom: 15px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.07);
    }

    .search__input {
        width: 100%;
        border: none;
        padding: 5px;
    }

    .search__icon {
        opacity: 0.4;
    }

    .search__close-btn {
        background: none;
        border: none;
        cursor: pointer;
    }

</style>