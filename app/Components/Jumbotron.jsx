"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import Image from "next/image";
import bg_hero from '../assets/bg-hero (1).png';

const Jumbotron = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pt-36 h-svh" id='home'>
            <div className="mx-auto max-w-screen-xl text-center h-full flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 text-left h-full flex flex-col justify-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl mb-6 pt-8 text-black dark:text-white">
                                Aria Shabry
                            </h1>
                            <h3 className="text-xl md:text-2xl lg:text-4xl mb-12 job-title text-yellow-600 dark:text-purple-500">Software Engineer</h3>
                            <p className="text-lg md:text-xl text-black dark:text-white mb-3">Hi, I'm Aria! I specialize in building scalable backend solutions with Golang, optimizing cloud infrastructure, and automating workflows through DevOps.</p>
                            <p className="text-lg md:text-xl text-black dark:text-white mb-3">I’m always excited to collaborate on innovative projects <br />—let’s build something great together!</p>
                        </div>
                        <div className="mt-20">
                            <a type="button" href="#contact" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-sm lg:px-10 lg:py-5 px-5 py-3">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact Me
                            </a>
                            <a type="button" href='#portfolio' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full ms-4 text-sm lg:px-10 lg:py-5 px-5 py-3">
                                <FontAwesomeIcon icon={faLocationArrow} className="mr-2 text-xl" /> My portfolio
                            </a>
                        </div>
                        <div className='button-sosmed lg:mt-48 mt-24 pb-8'>
                            <h3 className='inline-block me-8 text-xl font-semibold text-black dark:text-purple-500 follow-me'>Follow Me: </h3>
                            <div className='p-2 inline-block'>
                                <a href="https://instagram.com/ariashabry" target="_blank" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3  py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-block">
                                    <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
                                </a>
                                <a href="https://github.com/ariashabry" target="_blank" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-block">
                                    <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                                </a>
                                <a href="https://www.linkedin.com/in/ariashabry/" target="_blank" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-block">
                                    <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-center hidden md:flex">
                        <div className="avatar">
                            <div className="img">
                                <Image src={bg_hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Jumbotron;