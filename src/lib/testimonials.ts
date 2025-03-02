interface testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials = [
    {
        name: 'Azhar Khan',
        role: 'CEO, Insights.',
        quote: 'Fahad completely transformed our outdated website into a modern, responsive, and user-friendly platform. His expertise in web development is unmatched. He is highly professional, and his work is clean, efficient, and high quality. We highly recommend Fahad and would gladly work with him again - he is truly one of the best.'
    },
    {
        name: 'Michael Johnson',
        role: 'Founder, Startup Hub',
        quote: 'Fahad is a game-changer for our startup. He developed a custom web app that streamlined our operations and improved efficiency. His technical knowledge and proactive approach are exceptional. We highly recommend him and would gladly work with him again - he is truly one of the best.'
    },
    {
        name: 'Emily Brown',
        role: 'Freelance Designer',
        quote: 'Fahad’s attention to detail and the quality of his work are outstanding. He built a stunning web app that perfectly matched my vision. His work is clean, efficient, and high quality. I highly recommend him and would gladly work with him again - he is truly one of the best.'
    },
    {
        name: 'David Wilson',
        role: 'CTO, Innovate Labs',
        quote: 'Hiring Fahad was the best decision we made for our tech stack. He developed a robust web application and integrated advanced data scraping tools that have been a huge success. His technical expertise and proactive approach are unmatched. We highly recommend him and would gladly work with him again - he is truly one of the best.'
    },
    {
        name: 'Sarah Lee',
        role: 'Product Manager, GreenTech',
        quote: 'Fahad’s work is efficient, reliable, and easy to use. He built a custom eCommerce platform and implemented data scraping solutions that have been invaluable to our business. His professionalism and technical knowledge are exceptional. A pleasure to work with!'
    },
    {
        name: 'James Carter',
        role: 'Digital Marketing Specialist',
        quote: 'Fahad’s data scraping expertise helped us gather critical market insights that transformed our marketing strategy. His web development skills are top-notch, and his work is always clean, efficient, and high quality. Highly recommended!'
    },
    {
        name: 'Lina Zhang',
        role: 'Founder, EcoBoutique',
        quote: 'Fahad created a beautiful and functional eCommerce store for my business. His ability to combine design with functionality is exceptional. He is highly professional, and his work is always clean, efficient, and high quality. Highly recommended for anyone looking to build an online store!'
    },
    {
        name: "Hania M",
        role: "Founder StyleDrips",
        quote: "Our experience working with Fahad has been outstanding. He is highly professional with excellent technical knowledge and proactive approach. His work is clean, efficient and high quality. We highly recommend Fahad and would gladly work with him again - he is truly one of the best"


    }
] satisfies testimonial[];

export { testimonials, type testimonial }