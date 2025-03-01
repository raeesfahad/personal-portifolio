<script lang="ts">

	import Hero from '$lib/Hero';
	import About from '$lib/About';
	import Services from '$lib/Services';
	import Experience from '$lib/Experience';
	import Portifolio from '$lib/Portifolio';
	import Reviews from '$lib/Reviews/reviews.svelte';
	import { AtSign, Mail, SquareUserRound, User } from 'lucide-svelte';
	import { enhance } from '$app/forms';



	function openUrlInNewTab(url: string) {
		window.open(url, '_blank');
	}


</script>



	<section class="min-h-screen p-4">
	  <Hero />
	</section>
  
	<section class="min-h-screen p-4" id="me">
	  <About />
	</section>
  
	<section class="min-h-screen p-4" id="serv">
	  <Services />
	</section>
  
	<section class="min-h-screen p-4" id="exp">
	  <Experience />
	</section>
  
	<section class="min-h-screen p-4" id="proj">
	  <Portifolio />
	</section>
  
	<section class="min-h-screen p-4" id="rev">
	  <Reviews />
	</section>

	<section class="min-h-screen p-4" id="cont">

		<div>
			<h1 class="h1 text-center mt-10">Contact Me</h1>
		</div>


	<div class="flex flex-row justify-center mt-[50px]">
     
		<form method="post" use:enhance class="flex flex-col">
			<div class="w-full md:w-[600px] flex flex-col md:flex-row gap-2">
			  <label class="label flex-1">
				<div class="flex flex-row mb-1">
					<User class="w-[20px]"/>
				   <span class="ml-3">First Name</span>
			   </div>
				<input class="input px-4 py-3 w-full" type="text" name="first_name" placeholder="First Name" />
			  </label>
			  <label class="label flex-1">
				<div class="flex flex-row mb-1">
					<User class="w-[20px]"/>
				   <span class="ml-3">Last Name</span>
			   </div>
				<input class="input px-4 py-3 w-full" type="text" name="last_name" placeholder="Last Name" />
			  </label>
			</div>

			<div class="w-full md:w-[600px] flex flex-row gap-2 mt-3">
			  <label class="label w-full">
				<div class="flex flex-row mb-1">
					<AtSign class="w-[20px]"/>
				   <span class="ml-3">Email</span>
			   </div>
				<input class="input px-4 py-3 w-full" type="text" name="email" placeholder="Email" />
			  </label>
			</div>
		  
		
			<div class="w-full md:w-[600px] flex flex-row gap-2 mt-3">
			  <label class="label w-full">
				<div class="flex flex-row mb-1">
					 <Mail class="w-[20px]"/>
					<span class="ml-3">Your Message</span>
				</div>
				<textarea class="textarea h-[200px] w-full" rows="4" name="message" placeholder="Your Message"></textarea>
			  </label>
			</div>
			<div class="flex justify-center">
				<button type="submit" class="btn variant-filled-primary mt-3 px-3 w-[180px]">Submit</button>
			 </div>
		</form>
	</div>
     
	 
	

	  </section>



	

