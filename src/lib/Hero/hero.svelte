<script lang="ts">

	import { Avatar } from "@skeletonlabs/skeleton";
	import { Github, Instagram, Linkedin, Mouse } from "lucide-svelte";
	import Typewriter from "svelte-typewriter";




	function openUrlInNewTab(url: string) {
		window.open(url, '_blank');
	}

</script>

<div class="flex flex-row justify-center mt-[120px]">
    <div class="flex flex-col gap-3">
        <div class="flex justify-center">
            <Avatar initials="JD" width="w-24" src={'/avatar_alt.jpg'} />
        </div>

        <h1 class="h1">Fahad Ullah Khan</h1>
        <Typewriter loop speed="40" cursor>
            <p class="text-center font-semibold">I am a Software Engineer</p>
        </Typewriter>
    </div>
</div>

<div class="flex flex-row justify-center mt-[20px] gap-4">
    <a href="https://www.github.com/raeesfahad"><Github color="#ffffff" /></a>
    <a href="https://www.instagram.com/blackhatdude"><Instagram color="#ffffff" /></a>
    <a href="https://www.linkedin.com/in/raeesfahad/"><Linkedin color="#ffffff" /></a>
</div>

<div class="flex flex-row justify-center mt-[35px]">
    <button
        on:click={() => {
            openUrlInNewTab('https://www.upwork.com/freelancers/~01ee1eb292e4fc5d1d');
        }}
        class="btn btn-md variant-filled-error font-semibold w-[200px]">Hire Me</button
    >
</div>

<div class="flex flex-row justify-center mt-[100px]">
    <div class="flex flex-col gap-2 justify-center">
        <p class="font-semibold">Scroll Down</p>
        <p class="text-center animate-pulse ml-[35px]"><Mouse color="#ffffff" /></p>
    </div>
</div>