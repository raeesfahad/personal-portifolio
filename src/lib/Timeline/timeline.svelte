
<script lang="ts">

    export let institution : string ;
    export let date_to : string;
    export let date_from : string;
    export let title;
    export let points : any;

</script>



<ol class="border-s border-neutral-300 dark:border-neutral-500">
    <li>
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p class="font-semibold text-xs">
            {institution} - {date_from} To {date_to}
          </p>
        </div>
        <div class="mb-6 ms-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{title}</h4>
          <ol class="mb-3 text-neutral-500 dark:text-neutral-300">
            {#if points}
            {#each points as point}
            <li class="text-base mb-1 font-semibold text-md">✅ {point}</li>
            {/each}
            {/if}
          </ol>
        </div>
      </li>

</ol>
   

  
    