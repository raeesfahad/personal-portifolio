<script>
    import { onMount } from 'svelte';
  
    // Track the current slide index
    let currentSlide = 0;
  
    // Function to go to the next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % $$props.slidesCount;
    }
  
    // Function to go to the previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + $$props.slidesCount) % $$props.slidesCount;
    }
  
    // Optional: Auto-play the carousel
    onMount(() => {
      const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval); // Cleanup on component destroy
    });
  </script>
  
  <div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
    <!-- Slides Container -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      style="transform: translateX(-{currentSlide * 100}%);"
    >
      <slot name="slide" />
    </div>
  
    <!-- Navigation Buttons -->
    <div class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
      <button
        on:click={prevSlide}
        class="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
      >
        ❮
      </button>
      <button
        on:click={nextSlide}
        class="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
      >
        ❯
      </button>
    </div>
  </div>