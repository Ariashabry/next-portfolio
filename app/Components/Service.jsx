"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { useState } from 'react';

const Service = () => {

    const [activeService, setActiveService] = useState(1);
    const [hoverService, setHoverService] = useState(null);

    const handleActiveService = (id) => {
        setActiveService(id);
    }

    const serviceItem = [
        {
            id: 1,
            title: 'Backend - RestAPI',
            description: 'Building robust and scalable RESTful APIs using Go and PHP. Specializing in microservices architecture, database optimization, and secure authentication systems.'
        },
        {
            id: 2,
            title: 'Web Design - ReactJS',
            description: 'Creating responsive and dynamic web applications using React.js, Tailwind CSS, MaterialUI CSS. Focusing on component-based architecture, state management, and modern UI/UX implementations.'
        },
        {
            id: 3,
            title: 'Slicing UI/UX',
            description: 'Converting design mockups into pixel-perfect, responsive web interfaces. Expert in HTML5, CSS3, and modern frontend frameworks with attention to detail.'
        },
        {
            id: 4,
            title: 'Third Party API - Integration',
            description: 'Seamlessly integrating external services and APIs into applications. Experience with payment gateways, social media APIs, and cloud service integrations.'
        },
        {
            id: 5,
            title: 'Deploy and Automation to Cloud Service',
            description: 'Implementing CI/CD pipelines and cloud infrastructure automation. Expertise in AWS, Azure, and containerization technologies for efficient deployment.'
        }
    ]


    return (
        <section className="bg-gray-100 dark:bg-gray-700" id='skills'>
            <div className="container py-24 px-4 mx-auto max-w-screen-xl text-center h-full">
                <div className="p-4 text-left h-full">
                    <div className='mb-8'>
                        <h2 className="text-6xl mb-6 pt-8 text-black dark:text-white h2-title">
                            Services I Provide
                        </h2>
                    </div>
                    <div className="relative pb-24 ">

                        <dl className="divide-y divide-gray-200 dark:divide-gray-700">

                            {serviceItem.map((item) => (
                                <div
                                    className={`flex flex-col p-4 transition-all ease-in duration-500 sm:rounded-lg mb-2 shadow-md ${hoverService === item.id || (activeService === item.id && hoverService === null)
                                            ? 'bg-purple-500 text-white'
                                            : 'text-gray-900 hover:bg-purple-500 hover:text-white dark:text-white'
                                        }`}
                                    key={item.id}
                                    onClick={() => handleActiveService(item.id)}
                                    onMouseEnter={() => setHoverService(item.id)}
                                    onMouseLeave={() => setHoverService(null)}
                                >
                                    <dt className="mb-1 text-xl lg:text-2xl font-semibold"><span className='me-3'>{item.id}</span>{item.title}</dt>
                                    <dd className="text-base ms-5 lg:ms-6">{item.description}</dd>
                                </div>))}
                        </dl>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default Service;