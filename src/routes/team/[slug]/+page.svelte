<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import LoadState from '$lib/components/LoadState.svelte';
	import { socialMeta } from '$lib/ts/socialIcons';
	import { cms } from '$lib/ts/cms';
	import { memberPhoto, type Member } from '$lib/ts/group';

	let member = $state<Member | null>(null);
	let label = $state('');
	let loading = $state(true);

	onMount(async () => {
		const slug = page.params.slug;
		const data = await cms.team();
		if (data) {
			const everyone = [
				{ member: data.professor, label: 'Professor' },
				...data.groups.flatMap((group) =>
					group.members.map((person) => ({ member: person, label: group.heading }))
				)
			];
			const match = everyone.find(
				(entry) => entry.member.slug === slug || entry.member.id === slug
			);
			if (match) {
				member = match.member;
				label = match.label;
			}
		}
		loading = false;
	});
</script>

<Seo
	brand="CREATE Lab"
	title={member?.name ?? 'Team'}
	description={member
		? `${member.name}, ${label} in the CREATE Lab at George Mason University.`
		: 'A member of the CREATE Lab at George Mason University.'}
/>

<div class="mx-auto max-w-4xl px-4 py-12">
	<a
		href="/team"
		class="inline-flex items-center gap-1 text-sm font-medium text-gmu-green hover:underline"
	>
		<Icon icon="mdi:arrow-left" width="16" />
		Back to Team
	</a>

	{#if loading || !member}
		<LoadState {loading} empty="Team member not found." />
	{:else}
		<div class="mt-8 flex flex-col gap-8 sm:flex-row">
			<div class="flex-shrink-0">
				<div class="h-1.5 w-full bg-gmu-gold"></div>
				<img src={memberPhoto(member.photo)} alt={member.name} class="h-56 w-56 object-cover" />
			</div>
			<div>
				<p class="text-xs font-semibold tracking-widest text-gmu-green uppercase">{label}</p>
				<h1 class="mt-1 text-3xl font-bold tracking-tight text-slate-900">{member.name}</h1>
				{#if member.period}
					<p class="mt-1 font-mono text-sm text-gmu-green">{member.period}</p>
				{/if}
				{#if member.note}
					<p class="mt-2 text-slate-500">{member.note}</p>
				{/if}

				{#if member.education.length > 0}
					<ul class="mt-4 space-y-0.5 text-sm text-slate-600">
						{#each member.education as line (line)}
							<li>{line}</li>
						{/each}
					</ul>
				{/if}

				<div class="mt-5 flex flex-wrap items-center gap-4 text-slate-500">
					{#if member.email}
						<a
							href={`mailto:${member.email}@gmu.edu`}
							class="inline-flex items-center gap-1.5 text-sm font-medium hover:text-gmu-green"
						>
							<Icon icon="mdi:email" width="20" />
							{member.email}@gmu.edu
						</a>
					{/if}
					{#each member.socials as social (social.kind)}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={socialMeta[social.kind].label}
							class="hover:text-gmu-green"
						>
							<Icon icon={socialMeta[social.kind].icon} width="22" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		{#if member.bio}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div class="rich-content mt-10 text-slate-700">{@html member.bio}</div>
		{/if}
	{/if}
</div>
