<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import PublicationList from '$lib/components/PublicationList.svelte';
	import LoadState from '$lib/components/LoadState.svelte';
	import { cms, relatedSectionsFrom } from '$lib/ts/cms';
	import type { ResearchProject } from '$lib/ts/research';
	import type { PublicationSection } from '$lib/ts/publications';
	import { memberPhoto, type Member } from '$lib/ts/group';

	let project = $state<ResearchProject | null>(null);
	let relatedSections = $state<PublicationSection[]>([]);
	let memberByName = $state<Record<string, Member>>({});
	let loading = $state(true);

	const tags = $derived((project?.tags ?? []).filter((tag) => tag.trim()));
	const teamMembers = $derived((project?.teamMembers ?? []).filter((name) => name.trim()));
	const funding = $derived((project?.funding ?? []).filter((source) => source.trim()));
	const links = $derived((project?.links ?? []).filter((link) => link.href));
	const hasDetails = $derived(teamMembers.length > 0 || funding.length > 0);

	onMount(async () => {
		const key = page.params.slug;
		const [projects, pubData, team] = await Promise.all([
			cms.projects(),
			cms.publications(),
			cms.team()
		]);
		project = projects?.find((entry) => entry.slug === key || entry.id === key) ?? null;
		if (project && pubData) {
			relatedSections = relatedSectionsFrom(pubData, project.relatedPublications ?? []);
		}
		if (team) {
			const everyone = [team.professor, ...team.groups.flatMap((group) => group.members)];
			const map: Record<string, Member> = {};
			for (const member of everyone) {
				if (member.name) map[member.name] = member;
			}
			memberByName = map;
		}
		loading = false;
	});
</script>

<Seo
	brand="CREATE Lab"
	title={project?.title ?? 'Project'}
	description={project?.summary ||
		(project
			? `${project.title}, a project of the CREATE Lab at George Mason University.`
			: 'A project of the CREATE Lab at George Mason University.')}
/>

<div class="mx-auto max-w-3xl px-4 py-12">
	<a
		href="/projects"
		class="inline-flex items-center gap-1 text-sm font-medium text-gmu-green hover:underline"
	>
		<Icon icon="mdi:arrow-left" width="16" />
		Back to Projects
	</a>

	{#if loading || !project}
		<LoadState {loading} empty="Project not found." />
	{:else}
		{#if project.status}
			<p class="mt-8 font-mono text-xs font-semibold tracking-widest text-gmu-green uppercase">
				{project.status}
			</p>
		{/if}
		<h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{project.title}</h1>
		<div class="mt-3 h-1 w-12 bg-gmu-gold"></div>

		{#if project.summary}
			<p class="mt-6 text-lg leading-relaxed text-slate-600">{project.summary}</p>
		{/if}

		{#if tags.length}
			<div class="mt-5 flex flex-wrap gap-2">
				{#each tags as tag (tag)}
					<span class="rounded-full bg-gmu-green-light px-3 py-1 text-xs font-medium text-gmu-green">
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		{#if project.image}
			<img
				src={project.image}
				alt={project.title}
				class="mt-8 max-h-[32rem] w-full rounded-lg border border-slate-200 bg-slate-50 object-contain"
			/>
		{/if}

		{#if links.length}
			<div class="mt-6 flex flex-wrap gap-3">
				{#each links as link (link.href)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-gmu-green transition hover:border-gmu-green"
					>
						<Icon icon="mdi:open-in-new" width="16" />
						{link.label || link.href}
					</a>
				{/each}
			</div>
		{/if}

		{#if project.content}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div class="rich-content mt-8 text-slate-700">{@html project.content}</div>
		{/if}

		{#if hasDetails}
			<div class="mt-10 grid gap-6 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
				{#if teamMembers.length}
					<div>
						<h2 class="text-xs font-semibold tracking-widest text-gmu-green uppercase">Team</h2>
						<ul class="mt-3 space-y-2">
							{#each teamMembers as name (name)}
								{@const member = memberByName[name]}
								<li>
									{#if member}
										<a
											href={`/team/${member.slug || member.id}`}
											class="group flex items-center gap-3"
										>
											<img
												src={memberPhoto(member.photo)}
												alt={member.name}
												class="h-9 w-9 shrink-0 rounded-full border border-slate-200 object-cover"
											/>
											<span class="text-sm font-medium text-slate-700 group-hover:text-gmu-green">
												{member.name}
											</span>
										</a>
									{:else}
										<span class="flex items-center gap-3">
											<img
												src={memberPhoto(undefined)}
												alt=""
												class="h-9 w-9 shrink-0 rounded-full border border-slate-200 object-cover"
											/>
											<span class="text-sm text-slate-700">{name}</span>
										</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if funding.length}
					<div>
						<h2 class="text-xs font-semibold tracking-widest text-gmu-green uppercase">Funding</h2>
						<ul class="mt-3 space-y-1 text-sm text-slate-700">
							{#each funding as source (source)}
								<li>{source}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/if}

		{#if project.gallery?.length}
			<div class="mt-12">
				<h2 class="text-lg font-bold text-slate-900">Gallery</h2>
				<div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
					{#each project.gallery as src (src)}
						<img
							{src}
							alt=""
							class="aspect-square w-full rounded-lg border border-slate-200 object-cover"
						/>
					{/each}
				</div>
			</div>
		{/if}

		{#each relatedSections as section (section.heading)}
			<div class="mt-12">
				<h2 class="text-lg font-bold text-slate-900">{section.heading}</h2>
				<div class="mt-4">
					<PublicationList {section} />
				</div>
			</div>
		{/each}
	{/if}
</div>
