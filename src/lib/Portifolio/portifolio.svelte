<script lang="ts">
	import Card from "$lib/Card";
	import { data, type Project } from "$lib/projects";


	import { Tab, TabGroup } from "@skeletonlabs/skeleton";
    const hasTag = (project: Project, tag: string): boolean => {
		return project.tags.includes(tag);
	};

	const web = data.filter((project) => hasTag(project, 'web'));
	const scrappers = data.filter((project) => hasTag(project, 'misc'));
    let tabSet: number = 0;

</script>
<h1 class="h1 text-center mt-[30px] mb-[25px] md:mb-[30px]">Project Portifolio</h1>

	<div class="w-[380px] md:w-screen flex flex-row justify-center">
		<TabGroup justify="justify-center">
			<Tab bind:group={tabSet} name="tab1" value={0} class="md:w-[200px]" active="font-semibold">
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<span>All</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1} class="md:w-[200px]" active="font-semibold"
				>Web Development</Tab
			>
			<Tab bind:group={tabSet} name="tab3" value={2} class="md:w-[200px]" active="font-semibold"
				>Miscellaneous</Tab
			>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<div
						class="flex flex-wrap-reverse justify-center md:justify-start md:flex-wrap md:overflow-y-auto gap-4 md:w-[1000px] mt-9"
					>
						{#each data as CardData}
							
							<Card {CardData} />
						{/each}
					</div>
				{:else if tabSet === 1}
					<div
						class="flex flex-wrap-reverse justify-center md:justify-start md:flex-wrap md:overflow-y-auto gap-4 md:w-[1000px] mt-9"
					>
						{#each web as CardData}
							<Card {CardData} />
						{/each}
					</div>
				{:else if tabSet === 2}
					<div
						class="flex flex-wrap-reverse justify-center md:justify-start md:flex-wrap md:overflow-y-auto gap-4 md:w-[1000px] mt-9"
					>
						{#each scrappers as CardData}
							<Card {CardData} />
						{/each}
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
