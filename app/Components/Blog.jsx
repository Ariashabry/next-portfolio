"use client";

import { faMedium, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {

    const artikelItem = [
        {
            id: 1, title: 'Membuat aplikasi web dengan menggunakan Azure Portal', description: 'Pada tutorial ini kita akan belajar cara membuat Aplikasi Web dengan menggunakan Portal Azure..', author: 'Aria Shabry', date: 'Dec 11, 2021', link: 'https://medium.com/@aria.shabry4/membuat-aplikasi-web-dengan-menggunakan-azure-portal-6dfa744d5571',
        },
        {
            id: 2, title: 'How to Add Azure AD Authentication on ReactJS App', description: 'Cara membuat login autentikasi dengan akun Microsoft pada aplikasi ReactJS menggunakan Microsoft Authentication library (MSAL)..', author: 'Aria Shabry', date: 'Dec 10, 2021', link: 'https://medium.com/@aria.shabry4/how-to-add-azure-ad-authentication-on-reactjs-app-f91b35ff3020',
        },
        {
            id: 3, title: 'Elastic Search Documentation', description: 'Tutorial elastic search, documentation, download, configuration, and install it on your server..', author: 'Aria Shabry', date: 'Sep 18, 2021', link: 'https://medium.com/@aria.shabry4/elastic-search-documentation-515c11b7d1f',
        },
        {
            id: 4, title: 'How To Set Cookie In ReactJS', description: 'Bagaimana cara menambahkan cookie / cookies pada aplikasi web menggunakan ReactJS', author: 'Aria Shabry', date: 'Dec 9, 2021', link: 'https://medium.com/@aria.shabry4/how-to-set-cookie-in-reactjs-fe2fce0050d7',
        }, {
            id: 5, title: 'Cara menginstall MySQL dan phpMyAdmin menggunakan Docker', description: 'Pada tutorial ini kita akan belajar cara menginstall MySQL dan phpMyAdmin menggunakan Docker..', author: 'Aria Shabry', date: 'Nov 15, 2021', link: 'https://medium.com/@aria.shabry4/cara-menginstall-mysql-dan-phpmyadmin-menggunakan-docker-d69c0c9c8156',
        }
    ]

    return (
        <section className="bg-white dark:bg-gray-900" id="blog">
            <div className="py-32 px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className='mb-8'>
                    <h2 className="text-8xl mb-6 text-black dark:text-white h2-title">
                        From my <br />
                        blog posts
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </div>
                {/* <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </div> */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {artikelItem.map((item) => (
                        <article key={item.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial
                                </span>
                                <span className="text-sm">{item.date}</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href={item.link} target="_blank" >{item.title}</a></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-7 h-7 rounded-full" src="https://miro.medium.com/v2/resize:fill:132:132/1*2BfAgA456KL8xC0fkCVzqQ.jpeg" alt="Jese Leos avatar" />
                                    <span className="font-medium dark:text-white">
                                        {item.author}
                                    </span>
                                </div>
                                <a href={item.link} target="_blank" className="inline-flex items-center font-medium text-primary-600 dark:text-white hover:underline">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </article>
                    ))}

                </div>
                <div className="text-center m-16">
                    <a type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2" href="https://medium.com/@aria.shabry4" target="_blank">

                        <FontAwesomeIcon icon={faMediumM} className="text-black me-2 text-2xl" /> Read more my Blog at Medium
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blog;