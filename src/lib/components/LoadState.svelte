<script lang="ts">
	import Icon from '@iconify/svelte';

	let { loading, empty }: { loading: boolean; empty: string } = $props();
</script>

<div class="flex flex-col items-center gap-3 py-12 text-center text-slate-500">
	{#if loading}
		<Icon icon="mdi:loading" width="28" class="animate-spin text-gmu-green" />
		<p class="text-sm">Loading...</p>
	{:else}
		<Icon icon="mdi:tray-remove" width="28" class="text-slate-300" />
		<p class="text-sm">{empty}</p>
	{/if}
</div>
