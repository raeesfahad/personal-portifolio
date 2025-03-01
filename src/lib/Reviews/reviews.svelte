 
  <script lang="ts">
	import { testimonials, type testimonial } from "$lib/testimonials";
	import { Avatar } from "@skeletonlabs/skeleton";

let visibleTestimonial: testimonial | undefined;

function showTestimonial(index: number):void {
    setTimeout(() => {
        visibleTestimonial = testimonials[index];
    }, 2);
}

     showTestimonial(0);

  </script>




<h1 class="h1 text-center mt-[60px]">Clients and Reviews</h1>

<div class="flex flex-row justify-center mt-[40px]">
    {#if visibleTestimonial}
        <div class="flex flex-col gap-4">
            <div class="flex justify-center">
                <Avatar initials={visibleTestimonial.name} width="w-32" />
            </div>

            <div>
                <h3 class="h3 text-center">{visibleTestimonial.name}</h3>
                <p class="text-center text-sm md:text-md">{visibleTestimonial.role}</p>
            </div>

            <div class="card w-[330px] h-[100px] md:w-[550px] text-base py-4 px-5">
                <p class="text-center font-semibold">
                    {visibleTestimonial.quote}
                </p>
            </div>
        </div>
    {/if}
</div>

<div class="flex flex-row justify-center mt-[80px]">
    <button
        class="btn variant-filled-primary w-[80px] md:w-[160px]"
        on:click={() => {
            const randomNumber = Math.floor(Math.random() * testimonials.length) + 0;
            showTestimonial(randomNumber);
        }}>Next</button
    >
</div>
