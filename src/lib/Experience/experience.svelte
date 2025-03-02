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
            points = {[ "passed all subject with good grades ", "learned basics of programming, data structures, and database management", "Build a fyp named clinic MS to computerize operation of small medical clinics"
            ]}
        />
        <Timeline
            institution="Frontier Corps Public School"
            date_from={'Jun 2015'}
            date_to={'Jun 2017'}
            title={'FSc Pre Engineering'}
            points = {[ "passed all courses with good grades", "winner of Science and technology Competition for web development"]}
    
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
            points = {["build various web applications using technologies like Python and JavaScript","performed data scraping on web and different social media platforms using python on clients demand"]}
        />
        <Timeline
            institution={'Strugbits'}
            date_from={'jun 2023'}
            date_to={'Jul 2024'}
            title={'Trainee Software Engineer'}
            points={['contributed in developing enterprise grade software solutions']}
        />
    </div>
</div>
