<script lang="ts">
	import Icon from '@iconify/svelte';

	let {
		page = $bindable(1),
		total,
		pageSize = 10
	}: { page?: number; total: number; pageSize?: number } = $props();

	const totalPages = $derived(Math.max(1, Math.ceil(total / pageSize)));
	const pages = $derived(buildPages(page, totalPages));

	const buttonBase =
		'inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40';
	const buttonActive = 'border-gmu-green bg-gmu-green text-white';
	const buttonIdle = 'border-slate-200 bg-white text-slate-600 hover:border-slate-300';

	function buildPages(current: number, count: number): Array<number | 'gap'> {
		if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);
		const result: Array<number | 'gap'> = [1];
		const start = Math.max(2, current - 1);
		const end = Math.min(count - 1, current + 1);
		if (start > 2) result.push('gap');
		for (let value = start; value <= end; value++) result.push(value);
		if (end < count - 1) result.push('gap');
		result.push(count);
		return result;
	}

	function go(target: number) {
		page = Math.min(totalPages, Math.max(1, target));
	}
</script>

{#if totalPages > 1}
	<nav class="mt-8 flex items-center justify-center gap-1" aria-label="Pagination">
		<button
			class="{buttonBase} {buttonIdle}"
			disabled={page === 1}
			onclick={() => go(page - 1)}
			aria-label="Previous page"
		>
			<Icon icon="mdi:chevron-left" width="18" />
		</button>
		{#each pages as item, index (index)}
			{#if item === 'gap'}
				<span class="px-1 text-slate-400">...</span>
			{:else}
				<button
					class="{buttonBase} {item === page ? buttonActive : buttonIdle}"
					aria-current={item === page ? 'page' : undefined}
					onclick={() => go(item)}
				>
					{item}
				</button>
			{/if}
		{/each}
		<button
			class="{buttonBase} {buttonIdle}"
			disabled={page === totalPages}
			onclick={() => go(page + 1)}
			aria-label="Next page"
		>
			<Icon icon="mdi:chevron-right" width="18" />
		</button>
	</nav>
{/if}
