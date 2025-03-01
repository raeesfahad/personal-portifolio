type Project = {
    title: string;
    url: string;
    desc: string;
    thumbnail: string;
    tags : string[];
};

let data = [
    {
        title: 'PollChain',
        url: 'https://www.github.com/raeesfahad/PollChain',
        desc: 'A Blockchain based EVS to ensure voting transparency',
        thumbnail: '/images/PollChain.png',
        tags : ["web"]
    },
    {
        title: 'Tailor Shop MS',
        url: 'https://github.com/raeesfahad/cp-tailor-shop',
        desc: 'A tailoring house management web application',
        thumbnail: "",
        tags : ["web"]
    },
    {
        title: 'Authentication Module',
        url: 'https://github.com/raeesfahad/Lushlyrics-login',
        desc: 'An auth module for Django web Applications which provides plug and play auth system',
        thumbnail: "",
        tags : ["web"]
    },
    {
        title: 'StoreFront',
        url: 'https://github.com/raeesfahad/storefront-pos',
        desc: 'A POS/ Ordering system frontend writen in JavaScript and Svelte',
        thumbnail: "/images/storefront.png",
        tags : ["web"]
    },
    {
        title: 'Group Scrapper',
        url: 'https://github.com/raeesfahad/telegram-scrapper',
        desc: "a scrapper written in python to scrap media and text content from telegram groups",
        thumbnail: "",
        tags : ["misc"]
    },
    {
        title: 'Prediction Model',
        url: 'https://colab.research.google.com/drive/1JHJ1hW1s9BJPmbCDHSXf2Bo5jKRHuCvW?usp=sharing',
        desc: "An AI Prediction model which uses titanic passenger data to predict who survived",
        thumbnail: "",
        tags : ["misc"]
    }
] satisfies Project[]

// Export the type and the array
export { type Project, data };