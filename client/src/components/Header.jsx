import { useState } from "react"

export default function Header() {
    const [navToggle, setNavToggle] = useState(true);

    const handleNavToggle = () => {
        setNavToggle(!navToggle);
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RecipE</span>
                    </a>
                    <div className="flex md:order-2">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <form action="" method="post" className="">
                                <input type="text" id="search-navbar"
                                    className="p-1.5 ps-10 text-sm text-gray-600 border rounded-s-lg bg-gray-50 focus:outline-none focus:ring-brown-200 focus:border-brown-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search recipe..." />
                                    <button type="submit"
                                        className="border border-brown-100 focus:outline-none text-white bg-brown-100 hover:bg-brown-200 focus:ring-4 font-medium rounded-e-lg text-sm px-5 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>

                            </form>

                        </div>
                        <button onClick={handleNavToggle} type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${navToggle? 'hidden': ''} items-center justify-between w-full md:flex md:w-auto md:order-1`} >
                        <form className="relative flex flex-row mt-3 md:hidden border rounded-lg">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..." />
                                <button type="submit"
                                    className="focus:outline-none text-white bg-brown-100 rounded-r-lg  hover:bg-brown-200 font-medium  text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>

                        </form>
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-white bg-brown-200 rounded md:bg-transparent md:text-brown-200 md:p-0 md:dark:text-brown-200"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#publish"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Submit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
