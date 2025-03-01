<script>

	import Timeline from "$lib/Timeline";

</script>
<div class="flex justify-center">
    <h1 class="h1 mt-4">Timeline</h1>
</div>

<div class="flex flex-wrap-reverse justify-center md:justify-center mx-[15px] mt-[25px] gap-8">
    <div class="card w-[300px] py-2 px-5 md:w-[350px] md:py-1 md:px-4">
        <div class="card-header mb-3">
            <h4 class="h4">Education</h4>
        </div>
        <Timeline
            institution="University of Chitral"
            date_from={'Dec 2018'}
            date_to={'Jan 2021'}
            title={'BS Computer Sciences'}
        />
        <Timeline
            institution="Frontier Corps Public School"
            date_from={'Jun 2015'}
            date_to={'Jun 2017'}
            title={'FSc Pre Engineering'}
        />
    </div>
    <div class="card w-[300px] py-2 px-5 md:w-[350px] md:py-1 md:px-4">
        <div class="card-header mb-3">
            <h4 class="h4">Professional Experience</h4>
        </div>
        <Timeline
            institution={'Freelance'}
            date_from={'Mar 2020'}
            date_to={'Present'}
            title={'Freelancer'}
        />
        <Timeline
            institution={'Strugbits'}
            date_from={'jun 2023'}
            date_to={'Jul 2024'}
            title={'Trainee Software Engineer'}
        />
    </div>
</div>
