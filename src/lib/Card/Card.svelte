<script lang="ts">
	import { AppWindow, ArrowUpRight } from "lucide-svelte";

    export let CardData = {
        title : "Example Title",
        url : "/",
        desc : "this is where your project description goes, be creative with words",
        thumbnail : ""     
    } 

    function openUrlInNewTab() {
		
		window.open(CardData.url, '_blank');
	}

</script>



<div class="card w-[300px]">
    <header class="card-header">
         {#if CardData.thumbnail}
         <img src={CardData.thumbnail} class="object-cover h-[120px]" alt="thumb">
         {:else}
         <AppWindow class="size-[100px]"/>
         {/if}
        
        <h4 class="h4 mt-2">{CardData.title}</h4>
    </header>
    <section class="p-3">{CardData.desc}</section>
    <footer class="card-footer">
        <button on:click={() => openUrlInNewTab()} class="btn btn-sm px-6 variant-filled-primary">View More  <ArrowUpRight class="w-[15px]"/></button>
    </footer>
</div>