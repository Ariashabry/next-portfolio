"use client";

import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Image from "next/image";
import kstylehub from '../assets/kstylehub.png'

const Portfolio = () => {
    const swiperRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const projectItem = [
        {
            id: 1,
            name: 'UNRI Student Admission Web',
            category: 'web',
            description: 'Modern admission system for Universitas Riau new students.',
            image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
            tags: ['Laravel 11', 'Tailwind', 'MySQL'],
            link: '#portfolio'
        },
        {
            id: 2,
            name: 'UNNIS Mobile API',
            category: 'mobile',
            description: 'Beauty product recommendation service API for Indonesian market.',
            image: 'https://s3.ap-northeast-2.amazonaws.com/hiunnis.com/images/images2/services_01.png',
            tags: ['Golang', 'Flutter', 'MySQL', 'AWS', 'Python'],
            link: '#portfolio'
        },
        {
            id: 3,
            name: 'K-Style Hub Website',
            category: 'web',
            description: 'Business landing page website for K-Style Hub and Unnispick services.',
            image: kstylehub,
            tags: ['React', 'Node.js', 'AWS'],
            link: '#portfolio'
        },
        {
            id: 4,
            name: '"Lasuah" Assessment Platform',
            category: 'web',
            description: 'Online assessment platform for post-pandemic academic solutions.',
            image: 'https://ariashabry.github.io/portfolio/assets/img/portfolio/portfolio-2-1.jpg',
            tags: ['Golang', 'ReactJS', 'PostgreSQL', 'Azure'],
            link: '#portfolio'
        },
        {
            id: 5,
            name: 'JNP Group Portal',
            category: 'web',
            description: 'Corporate website showcasing JNP Group products',
            image: 'https://ariashabry.github.io/portfolio/assets/img/portfolio/portfolio-1.png',
            tags: ['PHP', 'Javascript', 'Bootstrap', 'MySQL'],
            link: '#portfolio'
        },
        {
            id: 6,
            name: 'Rancak Pantau Pilkada',
            category: 'mobile',
            description: 'Real-time vote counting and monitoring application for regional head elections.',
            image: 'https://ariashabry.github.io/portfolio/assets/img/portfolio/portfolio-5.png',
            tags: ['Java', 'PHP', 'Bootstrap', 'MySQL'],
            link: '#portfolio'
        },
        {
            id: 7,
            name: 'Truck Record App',
            category: 'mobile',
            description: 'Industrial fleet management solution for real-time truck tracking and logistics optimization.',
            image: 'https://ariashabry.github.io/portfolio/assets/img/portfolio/Thumbnail.png',
            tags: ['UI/UX', 'Figma'],
            link: '#portfolio'
        },

    ];

    const filteredProjects = activeFilter === 'all'
        ? projectItem
        : projectItem.filter(item => item.category === activeFilter);

    useEffect(() => {
        // Register Swiper web component
        register();

        // Destroy existing swiper instance if it exists
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.destroy(true, true);
        }

        // Swiper parameters
        const params = {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true, // Always enable loop
            autoplay: {
                delay: 2000, // 2 seconds delay between slides
                disableOnInteraction: false, // Continue autoplay after user interaction
                pauseOnMouseEnter: true // Pause on hover
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: filteredProjects.length >= 2 ? 2 : 1,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: filteredProjects.length >= 3 ? 3 : (filteredProjects.length >= 2 ? 2 : 1),
                    spaceBetween: 20
                }
            }
        };

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            if (swiperRef.current) {
                // Assign parameters to Swiper element
                Object.assign(swiperRef.current, params);
                // Initialize Swiper
                swiperRef.current.initialize();
            }
        }, 0);

    }, [activeFilter, filteredProjects.length]); // Re-run when filter changes

    useEffect(() => {
        // Add structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aria Shabry",
            "url": "https://ariashabry.github.io/portfolio/",
            "jobTitle": "Software Engineer",
            "worksFor": {
                "@type": "Organization",
                "name": "Your Company Name"
            },
            "description": "Full Stack Software Engineer specializing in web and mobile development",
            "knowsAbout": ["Web Development", "Mobile Development", "React", "Golang", "Laravel", "Flutter"]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0);
        }
    };

    return (
        <section className="bg-yellow-500 dark:bg-gray-800 h-full" id="portfolio">
            <div className="container py-24 px-4 mx-auto max-w-screen-xl text-center h-full">
                <div className="p-4 text-left h-full">
                    <div className='mb-8'>
                        <h2 className="text-8xl mb-6 pt-8 text-black dark:text-white h2-title">
                            Look at my <br />
                            recent projects
                        </h2>
                        {/* Add filter buttons */}
                        <div className="flex flex-wrap gap-4 mt-8 mb-8 justify-center">
                            <button
                                onClick={() => handleFilterChange('all')}
                                className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'all'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-black hover:bg-purple-100'
                                    }`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => handleFilterChange('web')}
                                className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'web'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-black hover:bg-purple-100'
                                    }`}
                            >
                                Web Development
                            </button>
                            <button
                                onClick={() => handleFilterChange('mobile')}
                                className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'mobile'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-black hover:bg-purple-100'
                                    }`}
                            >
                                Mobile Development
                            </button>
                        </div>
                    </div>
                    <div className="px-0 mx-0 relative project-slider">
                        <swiper-container
                            ref={swiperRef}
                            init="false"
                            className={`${filteredProjects.length === 1 ? 'max-w-[33%] mx-auto' : 'w-full'}`}
                        >
                            {filteredProjects.map((item) => (
                                <swiper-slide key={item.id}>
                                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                        <a href={item.link} className="block overflow-hidden rounded-t-lg h-48">
                                            <Image
                                                className="rounded-t-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                                src={item.image}
                                                alt={item.name}
                                                priority
                                                fill
                                            />
                                        </a>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.tags.map((tag, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* <a href={item.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                View Project
                                                <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a> */}
                                        </div>
                                    </div>
                                </swiper-slide>
                            ))}
                        </swiper-container>

                        {/* Only show navigation buttons if there's more than one project */}
                        {filteredProjects.length > 1 && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handlePrev}
                                    className="text-white bg-purple-600 dark:bg-purple-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="text-white bg-purple-600 dark:bg-purple-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;