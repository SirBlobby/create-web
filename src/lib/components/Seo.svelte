<script lang="ts">
	import { siteName } from '$lib/ts/navigation';

	let {
		title,
		description,
		brand = `${siteName} | CREATE Lab`
	}: { title: string; description: string; brand?: string } = $props();

	const fullTitle = `${title} | ${brand}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
