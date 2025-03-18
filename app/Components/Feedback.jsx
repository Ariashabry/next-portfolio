"use client";

import { useState } from 'react';

const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5 text-yellow-400">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const Feedback = () => {
    const feedbacks = [
        {
            id: 1,
            name: "Aprizon",
            role: "CEO at nozyra.com",
            content: "Exceptional dedication and teamwork skills. Consistently delivers high-quality results on time.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/C5103AQGjrQDQ8lGBpw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1577949501866?e=1746662400&v=beta&t=dD9Q6rWF0shgyHIg4CUVJ8hfSq5v0W6_zp8cFY1xN4g"
        },
        {
            id: 2,
            name: "Yun Jung Park",
            role: "CEO at K-Style Hub & Unnis",
            content: "Outstanding technical leadership and project management. Excellent team collaboration and communication skills.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/D5603AQFghizI8CuzEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677119707617?e=1746662400&v=beta&t=J5pRRoPCsf5EXLGTqrhD15hUsKDL4e1XfsaDutyXDk4"
        },
        {
            id: 3,
            name: "Ibnu Daqiqil Id",
            role: "Head of Data and Information Technology Center at UNRI",
            content: "Exceptional technical expertise and dedication. Consistently exceeds project expectations.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/C5103AQHyvaiRfFOgcQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1522213931597?e=1746662400&v=beta&t=J_YCThdTYMclcvJZiCEiTKMe2vWhC4q1kLo1Ojhrcac"
        },
        {
            id: 4,
            name: "Risal Law",
            role: "Senior Principal at Tiket.com",
            content: "Excellent problem-solver with strong technical and interpersonal skills. Great team player.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/D5603AQGKbc1U36SO0Q/profile-displayphoto-shrink_400_400/B56ZQ7_qz3GQAg-/0/1736173334434?e=1746662400&v=beta&t=r9DpG_Px6siFiKCFzTwF8UkTq9Y5AFLEjycBtD0xmMY"
        },
        {
            id: 5,
            name: "Puja Pramudya",
            role: "Co-founder Radya Labs & Head of Engineering at eFishery",
            content: "Impressive drive for learning and innovation. Adapts quickly to new challenges.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/D5603AQFMobXamJOZuA/profile-displayphoto-shrink_100_100/B56ZVXbOBNHoAc-/0/1740928509279?e=1746662400&v=beta&t=hScEfe5xNc-8qTBFO_7xV-8PCOsesM1DlBtV0FvS13E"
        },
        {
            id: 6,
            name: "Dedy Ong",
            role: "CEO Webby Digital",
            content: "Strong technical skills and integrity. Delivers outstanding results consistently.",
            rating: 5,
            image: "https://media.licdn.com/dms/image/v2/D5603AQFwkD2-MbG72g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669361340233?e=1746662400&v=beta&t=OXxnd8sy39i25MfN67406T3HFgn6txNhUnu8DLC_df4"
        }
    ];

    const clients = [
        {
            name: "UNRI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/LOGO-UNRI.png",
            url: "https://unri.ac.id"
        },
        {
            name: "K-Style Hub",
            logo: "https://www.k-stylehub.com/default/img/logo.png",
            url: "https://www.k-stylehub.com/default/"
        },
        {
            name: "Hiunnis",
            logo: "https://www.hiunnis.com/images/unnis_logo.png",
            url: "https://www.hiunnis.com/"
        },
        {
            name: "Nozyra",
            logo: "https://www.nozyra.com/wp-content/uploads/2020/08/logo-nozyra-revisi-6-agustus.png",
            url: "https://www.nozyra.com/"
        },
        {
            name: "Webby Digital",
            logo: "https://pbs.twimg.com/profile_images/440077063974694912/eBwtENeF_400x400.jpeg",
            url: "https://www.webby.digital/home/"
        }
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-700 h-full" id="feedback">
            <div className="container py-24 px-4 mx-auto max-w-screen-xl text-center h-full">
                <div className="p-4 text-left h-full">
                    <div className='mb-8'>
                        <h2 className="text-6xl mb-6 text-black dark:text-white h2-title block">
                            Valuable feedback <br />from my clients
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="mx-auto">
                            <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="mb-8 sm:break-inside-avoid">
                                        <blockquote className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md sm:p-8 min-h-[250px] flex flex-col">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    alt={feedback.name}
                                                    src={feedback.image}
                                                    className="size-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <StarRating rating={feedback.rating} />
                                                    <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                                                        {feedback.name}
                                                    </p>
                                                    <p className="text-sm text-purple-600 dark:text-purple-400">
                                                        {feedback.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-gray-700 dark:text-gray-300 flex-grow">
                                                "{truncateText(feedback.content)}"
                                            </p>
                                        </blockquote>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <div className='mb-8'>
                    <h2 className="text-6xl mb-6 text-black dark:text-white h2-title">
                        Partner & clients
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <a
                            key={index}
                            href={client.url}
                            className="w-full flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full pt-[60%]">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="absolute top-0 left-0 w-full h-full object-contain"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;