<script lang="ts">
	import type { Education } from '$lib/ts/group';

	let { education }: { education: Education[] } = $props();

	function institutionLine(entry: Education): string {
		return [entry.institution, entry.years].filter((part) => part && part.trim()).join(', ');
	}
</script>

<ul class="space-y-2">
	{#each education as entry, index (index)}
		<li class="flex flex-col gap-0.5 border-l-2 border-gmu-gold pl-3 text-sm leading-snug">
			<span class="font-medium text-slate-800">{entry.degree}</span>
			{#if institutionLine(entry)}
				<span class="text-slate-500">{institutionLine(entry)}</span>
			{/if}
		</li>
	{/each}
</ul>
