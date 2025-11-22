<script lang="ts">
	import '$lib/styles/app.css';
	import { page } from '$app/state';
	import logotipo from '$lib/images/logotipo-concertpub.webp';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div><img src={logotipo} alt="ConcertPub Logo" class="header__logo" /></div>
	<nav>
		<a class="nav__link" class:active={page.url.pathname === '/'} href="/">Home</a>
		<a class="nav__link" class:active={page.url.pathname === '/orari'} href="/orari">Orari</a>
	</nav>
</header>

<main>

	{@render children()}

</main>

<footer>
	&copy; {new Date().getFullYear()} ConcertPub
</footer>

<style>

	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
		background-color: white;
		z-index: 99999;
	}

	.header__logo {
		height: 30px;
	}

	footer {
		margin-top: 50px;
		font-size: 0.8rem;
		text-align: center;
		padding: 30px 0;
		background-color: rgba(0, 0, 0, 0.1);
	}

	nav {
		display: flex;
		gap: 20px;
	}

	.nav__link {
		padding: 5px 0;
		border-bottom: solid 2px transparent;
	}

	.nav__link.active {
		border-bottom: solid 2px var(--primary-color);
	}

	main {
		min-height: calc(100vh - 220px);
	}

</style>