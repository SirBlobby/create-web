<script lang="ts">
	import '$lib/css/app.css';
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { cms, resolveAsset } from '$lib/ts/cms';
	import type { SiteInfo } from '$lib/ts/site';

	let { children } = $props();

	let info = $state<SiteInfo | null>(null);

	const logo = $derived(resolveAsset(info?.logo) || '/create_logo.png');

	onMount(async () => {
		info = await cms.siteInfo<SiteInfo>();
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/create_logo.png" />
	<link rel="apple-touch-icon" href="/create_logo.png" />
	<meta property="og:site_name" content="CREATE Lab, George Mason University" />
	<meta property="og:image" content="/create_logo.png" />
	<meta name="theme-color" content="#006633" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-slate-100 text-slate-900">
	<Nav siteName={info?.labName ?? ''} {logo} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer
		siteName={info?.labName ?? ''}
		institution={info?.institution ?? ''}
		tagline={info?.tagline ?? ''}
		contact={info?.contact ?? null}
		showAccessibility={info?.showAccessibility !== false}
		{logo}
	/>
</div>
