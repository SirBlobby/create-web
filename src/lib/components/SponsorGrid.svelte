<script lang="ts">
	import type { Sponsor } from '$lib/ts/home';

	let { sponsors }: { sponsors: Sponsor[] } = $props();
</script>

<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
	{#each sponsors as sponsor (sponsor.name)}
		<div class="flex h-28 items-center justify-center bg-white p-5 shadow-sm">
			<img src={sponsor.image} alt={sponsor.name} class="max-h-16 max-w-full object-contain" />
		</div>
	{/each}
</div>
