"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import { faGithub, faInstagram, faLinkedin, faMediumM } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-purple-700" id="contact">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="text-gray-800 dark:text-gray-200">
                        <a href="#home" className="flex items-center">
                            <Image src='/assets/images/logo.webp' className="h-12 w-auto" alt="Logo" width={48}
                                height={48} />
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-2 w-full">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-4xl font-bold text-yellow-500 dark:text-yellow-500 mb-4">
                                Let's create something amazing!
                            </h2>
                            <p className="text-gray-200 dark:text-gray-800 mb-6">
                                Ready to bring your ideas to life? I'm always excited to collaborate on new projects. Whether you have a specific project in mind or want to discuss possibilities, let's connect and make it happen.
                            </p>
                            {/* Email Section */}
                            <div className="my-16">
                                <p className="text-gray-300 dark:text-gray-700 text-xl mb-2">Email:</p>
                                <p className="text-white dark:text-gray-900 text-2xl font-semibold">
                                    aria.shabry@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Social Links */}
                        <div className="lg:text-right">
                            <div className="flex flex-col lg:items-end">
                                <p className="font-semibold text-xl mb-4 dark:text-gray-900 text-white">
                                    Follow me:
                                </p>
                                <div className="flex gap-6">
                                    <a href="https://instagram.com/ariashabry" target="_blank" rel="noreferrer"
                                        className="dark:text-gray-700 text-gray-300 dark:hover:text-purple-600 hover:text-yellow-400 transition-colors">
                                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                                    </a>
                                    <a href="https://github.com/ariashabry" target="_blank" rel="noreferrer"
                                        className="dark:text-gray-700 text-gray-300 dark:hover:text-purple-600 hover:text-yellow-400 transition-colors">
                                        <FontAwesomeIcon icon={faGithub} size="xl" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ariashabry/" target="_blank" rel="noreferrer"
                                        className="dark:text-gray-700 text-gray-300 dark:hover:text-purple-600 hover:text-yellow-400 transition-colors">
                                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                    </a>
                                    <a href="https://medium.com/@aria.shabry4" target="_blank" rel="noreferrer"
                                        className="dark:text-gray-700 text-gray-300 dark:hover:text-purple-600 hover:text-yellow-400 transition-colors">
                                        <FontAwesomeIcon icon={faMediumM} size="xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500 dark:text-gray-800 mb-4 sm:mb-0">
                            &copy; 2025 Optimate Space. All rights reserved.
                        </p>
                        <a href="https://optimate.space"
                            className="text-xs text-gray-500 dark:text-gray-800 hover:text-yellow-500 dark:hover:text-purple-800 transition-colors hover:underline">
                            www.optimate.space
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;