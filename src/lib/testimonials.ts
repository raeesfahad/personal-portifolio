interface testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials = [
    {
        name: 'Azhar Khan',
        role: 'CEO, Insights.',
        quote: 'Fahad completely transformed our outdated website into a modern, responsive, and user-friendly platform. His expertise in web development is unmatched. Highly recommended!'
    },
    {
        name: 'Hania M',
        role: 'Ecommerce Store Owner',
        quote: 'Fahad built my eCommerce dashboard in just a few weeks, complete with useful insights and analytics. His work has significantly boosted my sales. Couldn’t recommend him more!'
    },
    {
        name: 'Michael Johnson',
        role: 'Founder, Startup Hub',
        quote: 'Fahad is a game-changer for our startup. He developed a custom web app that streamlined our operations and improved efficiency. The results speak for themselves!'
    },
    {
        name: 'Emily Brown',
        role: 'Freelance Designer',
        quote: 'I was blown away by Fahad’s attention to detail and the quality of his work. He built a stunning web app that perfectly matched my vision. Truly outstanding!'
    },
    {
        name: 'David Wilson',
        role: 'CTO, Innovate Labs',
        quote: 'Hiring Fahad was the best decision we made for our tech stack. He developed a robust web application and integrated advanced data scraping tools that have been a huge success!'
    },
    {
        name: 'Sarah Lee',
        role: 'Product Manager, GreenTech',
        quote: 'Fahad’s work is efficient, reliable, and easy to use. He built a custom eCommerce platform and implemented data scraping solutions that have been invaluable to our business. A pleasure to work with!'
    },
    {
        name: 'James Carter',
        role: 'Digital Marketing Specialist',
        quote: 'Fahad’s data scraping expertise helped us gather critical market insights that transformed our marketing strategy. His web development skills are top-notch!'
    },
    {
        name: 'Lina Zhang',
        role: 'Founder, EcoBoutique',
        quote: 'Fahad created a beautiful and functional eCommerce store for my business. His ability to combine design with functionality is exceptional. Highly recommended for anyone looking to build an online store!'
    }
] satisfies testimonial[];

export { testimonials, type testimonial }