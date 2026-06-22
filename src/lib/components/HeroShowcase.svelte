<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { images = [], alt = '' }: { images?: string[]; alt?: string } = $props();

	let index = $state(0);
	let timer: ReturnType<typeof setInterval> | undefined;

	const slant = 22;
	const nodes = [0.16, 0.42, 0.68, 0.9];

	onMount(() => {
		if (images.length > 1) {
			timer = setInterval(() => {
				index = (index + 1) % images.length;
			}, 5000);
		}
	});

	onDestroy(() => {
		if (timer) clearInterval(timer);
	});
</script>

<div class="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block">
	<div
		class="relative h-full w-full"
		style="clip-path: polygon({slant}% 0, 100% 0, 100% 100%, 0% 100%);"
	>
		{#each images as src, i (src + i)}
			<img
				{src}
				alt={i === index ? alt : ''}
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out"
				style:opacity={i === index ? 1 : 0}
			/>
		{/each}
	</div>

	<svg
		class="absolute inset-0 h-full w-full"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<polyline
			points="{slant},0 0,100"
			fill="none"
			stroke="var(--color-gmu-gold)"
			stroke-width="5"
			vector-effect="non-scaling-stroke"
		/>
	</svg>

	{#each nodes as t (t)}
		<span
			class="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gmu-gold ring-4 ring-gmu-green"
			style="left: {slant * (1 - t)}%; top: {t * 100}%;"
		></span>
	{/each}
</div>
