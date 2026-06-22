<script lang="ts">
	import PersonCard from './PersonCard.svelte';
	import Pagination from './Pagination.svelte';
	import type { MemberGroup } from '$lib/ts/group';

	let { group }: { group: MemberGroup } = $props();

	const pageSize = 8;
	let page = $state(1);
	const visible = $derived(group.members.slice((page - 1) * pageSize, page * pageSize));
</script>

<div class="mt-14">
	<h2 class="text-xl font-bold text-slate-900">{group.heading}</h2>
	<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each visible as member (member.name)}
			<PersonCard {member} />
		{/each}
	</div>
	<Pagination bind:page total={group.members.length} {pageSize} />
</div>
