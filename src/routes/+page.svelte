<script lang="ts">
    import { categories } from '$lib/database/categories';

</script>

<div class="container">
    <h1>Menu</h1>

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

</style>