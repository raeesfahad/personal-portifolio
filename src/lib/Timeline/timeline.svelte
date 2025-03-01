
<script lang="ts">

    export let institution : string ;
    export let date_to : string;
    export let date_from : string;
    export let title;

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
          <p class="mb-3 text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque diam non nisi semper, et elementum lorem ornare.
            Maecenas placerat facilisis mollis. Duis sagittis ligula in
            sodales vehicula.
          </p>
        </div>
      </li>

</ol>
   

  
    