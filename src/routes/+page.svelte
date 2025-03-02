<script lang="ts">
	import Hero from '$lib/Hero';
	import About from '$lib/About';
	import Services from '$lib/Services';
	import Experience from '$lib/Experience';
	import Portifolio from '$lib/Portifolio';
	import Reviews from '$lib/Reviews/reviews.svelte';
	import { AtSign, Mail, SquareUserRound, User } from 'lucide-svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { postForm, postFormSupabase, type Message } from '$lib/backend/services';

	const toastStore = getToastStore();

	type FormData = {
		first_name: string;
		last_name: string;
		email: string;
		message: string;
	};

	// Handle form submission
	async function submitForm(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    try {
        // Try PocketBase first
        let result = await postForm(data);

        if (!result.success) {
            // If PocketBase fails, fall back to Supabase
            console.warn("PocketBase failed. Falling back to Supabase.");
            result = await postFormSupabase(data);
        }

        if (result.success) {
            toastStore.trigger({
                message: "Your message has been posted. Thank you!",
                timeout: 30000,
                background: "variant-filled-success",
            });
        } else {
            toastStore.trigger({
                message: "Failed to post your message. Please try again later.",
                timeout: 30000,
                background: "variant-filled-error",
            });
        }
    } catch (error) {
        // Handle unexpected errors
        console.error("An unexpected error occurred:", error);
        toastStore.trigger({
            message: `An error occurred: ${String(error)}`,
            timeout: 30000,
            background: "variant-filled-error",
        });
    }
}


	function openUrlInNewTab(url: string) {
		window.open(url, '_blank');
	}

	onMount(() => {
		toastStore.clear();

		const t = {
			message: 'We use cookies to enhance the user experience of our website, please use allow cookies button to continue',
			timeout: 10000,
			classes: 'p-3',
			action: {
				label: 'Allow',
				response: () =>
					toastStore.trigger({
						message: 'Cookies Allowed',
						timeout: 10000,
						background: 'variant-filled-success',
					}),
			},
		} satisfies ToastSettings;

		toastStore.trigger(t);
	});
</script>

<svelte:head>
    <title>Fahad Ullah K.</title> 
</svelte:head>

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
		<form method="POST" on:submit|preventDefault={submitForm} class="flex flex-col">
			<div class="w-full md:w-[600px] flex flex-col md:flex-row gap-2">
				<label class="label flex-1">
					<div class="flex flex-row mb-1">
						<User class="w-[20px]" />
						<span class="ml-3">First Name</span>
					</div>
					<input class="input px-4 py-3 w-full" type="text" name="first_name" placeholder="First Name" required />
				</label>
				<label class="label flex-1">
					<div class="flex flex-row mb-1">
						<User class="w-[20px]" />
						<span class="ml-3">Last Name</span>
					</div>
					<input class="input px-4 py-3 w-full" type="text" name="last_name" placeholder="Last Name" required />
				</label>
			</div>

			<div class="w-full md:w-[600px] flex flex-row gap-2 mt-3">
				<label class="label w-full">
					<div class="flex flex-row mb-1">
						<AtSign class="w-[20px]" />
						<span class="ml-3">Email</span>
					</div>
					<input class="input px-4 py-3 w-full" type="text" name="email" placeholder="Email" required />
				</label>
			</div>

			<div class="w-full md:w-[600px] flex flex-row gap-2 mt-3">
				<label class="label w-full">
					<div class="flex flex-row mb-1">
						<Mail class="w-[20px]" />
						<span class="ml-3">Your Message</span>
					</div>
					<textarea class="textarea h-[200px] w-full p-2" rows="3" name="message" placeholder="Your Message" required></textarea>
				</label>
			</div>
			<div class="flex justify-center">
				<button type="submit" class="btn variant-filled-success mt-3 px-3 w-[180px]">Submit</button>
			</div>
		</form>
	</div>
</section>