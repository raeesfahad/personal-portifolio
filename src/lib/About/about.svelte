<script lang="ts">
	import { Avatar, ProgressBar } from '@skeletonlabs/skeleton';

	import { Clock5, Flame, UsersRound } from 'lucide-svelte';

	function openUrlInNewTab(url: string): void {
		window.open(url, '_blank');
	}
</script>

<h1 class="h1 mt-[30px] text-center">About Me</h1>

<div class="flex flex-row justify-center mt-3">
	<div class="flex flex-col md:flex-row md:mt-16 gap-10">
		<div class="flex justify-center">
			<Avatar class="w-32 md:w-[230px]" src="/avatar.jpg" />
		</div>

		<div class="card w-[320px] md:w-[600px] h-auto md:h-[250px] mb-[20px] p-5 md:p-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div>
					<p class="text-sm md:text-base font-semibold">
						I am Fahad Ullah Khan, a Software Developer from Chitral, Pakistan. I have a very rich
						experience in developing websites and backend services using various technologies.
					</p>

					<button
						on:click={() => {
							openUrlInNewTab('/Files/resume.pdf');
						}}
						class="btn btn-md variant-filled-error mt-[25px] text-surface-100 w-full md:w-auto"
						>Download Resume</button
					>
				</div>
				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-2">
						<div class="flex flex-row justify-between">
							<h6 class="h6">Python</h6>
							<h6 class="h6">{90}%</h6>
						</div>
						<ProgressBar meter="bg-primary-500" track="bg-primary-500/30" value={90} />
					</div>
					<div class="flex flex-col gap-2">
						<div class="flex flex-row justify-between">
							<h6 class="h6">JavaScript</h6>
							<h6 class="h6">{70}%</h6>
						</div>
						<ProgressBar meter="bg-tertiary-500" track="bg-tertiary-500/30" value={70} />
					</div>
					<div class="flex flex-col gap-2">
						<div class="flex flex-row justify-between">
							<h6 class="h6">Database Development</h6>
							<h6 class="h6">{75}%</h6>
						</div>
						<ProgressBar value={75} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-16 p-4">
	<!-- Projects Completed -->
	<div class="flex flex-row items-center gap-4 w-[calc(50%-0.5rem)] sm:w-auto">
		<div>
			<Flame class="w-12 h-12 md:w-24 md:h-24" />
		</div>
		<div class="flex flex-col">
			<h1 class="h1 text-2xl md:text-4xl">80+</h1>
			<p class="text-sm md:text-base">Projects Completed</p>
		</div>
	</div>

	<div class="flex flex-row items-center gap-4 w-[calc(50%-0.5rem)] sm:w-auto">
		<div>
			<UsersRound class="w-12 h-12 md:w-24 md:h-24" />
		</div>
		<div class="flex flex-col">
			<h1 class="h1 text-2xl md:text-4xl">50</h1>
			<p class="text-sm md:text-base">Happy Clients</p>
		</div>
	</div>

	<!-- Hours in Coding -->
	<div class="flex flex-row items-center gap-4 w-[calc(50%-0.5rem)] sm:w-auto">
		<div>
			<Clock5 class="w-12 h-12 md:w-24 md:h-24" />
		</div>
		<div class="flex flex-col">
			<h1 class="h1 text-2xl md:text-4xl">1500+</h1>
			<p class="text-sm md:text-base">Hours in Coding</p>
		</div>
	</div>
</div>
