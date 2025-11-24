<script lang="ts">

    import type { MenuEntry } from '$lib/models/menu-entry';
    let { food } = $props();

</script>

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