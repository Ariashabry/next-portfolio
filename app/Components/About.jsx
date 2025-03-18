"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

const About = () => {

    const downloadHandler = () => {
        window.open('https://drive.google.com/file/d/1yxraYNDYkbdD6MmzEZj6iDOC_5PWHGES/view?usp=sharing', '_blank');
    }

    return (
        <section className="bg-purple-600 dark:bg-gray-700 h-full my-0" id="about">
            <div className="container mx-auto max-w-screen-xl text-center h-full flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    <div className="flex items-center justify-center left pb-20">
                        <div className="box">
                            <h3 className="year">6</h3>
                            <span className="experience">Years of Experience</span>
                            <h3 className="name_year">Aria Shabry</h3>
                        </div>
                    </div>
                    <div className="p-4 text-left h-full flex flex-col justify-center">
                        <div>
                            <h2 className="text-6xl mb-6 pt-8 text-black dark:text-yellow-600 h2-title">
                                About Me
                            </h2>
                            <p className="lg:text-2xl md:text-xl text-lg text-black dark:text-white">
                                With 6 years of experience as a professional software engineer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                            </p>
                        </div>
                        <div className="mt-20">
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-yellow-400 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-6 py-4 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={downloadHandler}>
                                <FontAwesomeIcon icon={faFilePdf} className="mr-2 text-xl" /> Download My CV
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default About;