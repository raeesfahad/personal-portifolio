<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { Menu, House, FolderCode, SquareUser, GalleryHorizontalEnd } from 'lucide-svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import { page } from '$app/state';

	const pathname = page.url.pathname

	initializeStores();
	const drawerStore = getDrawerStore();
	 
</script>



<AppShell>
	<svelte:fragment slot="header">

	<Drawer>
		<h3 class="h3 text-center m-[10px]">Navigation</h3>
	   <div class="m-[30px]">
		 <nav class="list-nav py-4 flex-col gap-2">
		 
			 <ul>
				 <li class="py-2">
					 <a href="/">
						 <House />
						 <span class="flex-auto">Home</span>
					 </a>
				 </li>
				 <li class="py-2">
					 <a href="/#serv">
						 <FolderCode />
						 <span class="flex-auto">Services</span>
					 </a>
				 </li>
				 <li class="py-2">
					 <a href="/#me">
						 <SquareUser />
						 <span class="flex-auto">About</span>
					 </a>
				 </li>
				 <li class="py-2">
					 <a href="/#proj">
						 <GalleryHorizontalEnd />
						 <span class="flex-auto">Portifolio</span>
					 </a>
				 </li>
			 </ul>
		 
		 </nav>
	  </div>
	 </Drawer>
	 
		
	 
	 
		 <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" shadow="shadow-md">
			 <svelte:fragment slot="lead">
			  <h3 class="h2 font-serif">Fahad</h3>
			 </svelte:fragment>
			 <svelte:fragment slot="default">
			  <h3 class="h2 font-serif hidden">ok</h3>
			 </svelte:fragment>
	 
			 <svelte:fragment slot="trail">
				 <button 
				 on:click={()=> drawerStore.open()}
				 class="lg:hidden">
					 <Menu />
				 </button>
				 <div class="hidden lg:block">
					 <nav class="navbar">
						 <ul class="flex flex-row gap-8">
							 <li><a class={pathname === "/" ? 'font-bold' : ""} href="/">Home</a></li>
							 <li><a href="#me">About</a></li>
							 <li><a href="#serv">Services</a></li>
							 <li><a href="#proj">Portifolio</a></li>
						 </ul>
					 </nav>
				</div>
			 </svelte:fragment>
		 </AppBar>
	 
	</svelte:fragment>
	<slot />

</AppShell>
