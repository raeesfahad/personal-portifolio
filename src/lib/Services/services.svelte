<script>

import { AppWindow, DatabaseZap, MonitorCog } from "lucide-svelte";

  

</script>
<div class="flex justify-center mb-[20px]">
    <h1 class="h1">Services</h1>
</div>

<div class="flex flex-col md:flex-row gap-4 justify-center p-4 mt-[20px]">
   
    <div class="rounded-lg py-3 md:py-8 px-4 md:size-[300px] bg-primary-800">
        <div class="flex flex-row justify-center">
            <header class="card-header">
                <AppWindow class="size-[80px]" />
            </header>
        </div>
        <h5 class="h5 text-center mt-4">Web Developemnt</h5>
        <p class="mt-2 text-center text-sm text-white">
            Crafting responsive and user-friendly websites with modern frameworks and technologies to
            deliver seamless digital experiences.
        </p>
    </div>

    <div class="rounded-lg md:py-8 px-4 py-3 md:size-[300px] bg-secondary-800">
        <div class="flex flex-row justify-center">
            <header class="card-header">
                <DatabaseZap class="size-[80px]" />
            </header>
        </div>
        <h5 class="h5 text-center mt-4">Data Mining</h5>
        <p class="mt-2 text-center text-sm text-white">
            Extracting valuable insights from large datasets using advanced algorithms and tools to
            drive data-driven decision-making
        </p>
    </div>
    <div class="rounded-lg py-3 md:py-8 px-4 md:size-[300px] bg-warning-800">
        <div class="flex flex-row justify-center">
            <header class="card-header">
                <MonitorCog class="size-[80px]" />
            </header>
        </div>
        <h5 class="h5 text-center mt-4">Automation</h5>
        <p class="mt-2 text-center text-sm text-white">
            Streamlining repetitive tasks and processes through custom scripts and tools to enhance
            efficiency and productivity.
        </p>
    </div>
</div>

<p class="hidden md:block text-center mt-[40px] text-md">
    Looking for a custom soluton? <a href="/" class="anchor">Here</a> to contact me
</p>