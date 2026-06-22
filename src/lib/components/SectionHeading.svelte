<script lang="ts">
	let { eyebrow, title, description }: { eyebrow?: string; title: string; description?: string } =
		$props();
</script>

<div class="max-w-2xl border-l-4 border-gmu-gold pl-4 sm:pl-5">
	{#if eyebrow}
		<p class="text-xs font-bold tracking-[0.25em] text-gmu-green uppercase">{eyebrow}</p>
	{/if}
	<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
	{#if description}
		<p class="mt-3 text-slate-600">{description}</p>
	{/if}
</div>
