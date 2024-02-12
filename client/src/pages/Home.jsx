import { useEffect, useState } from "react"
import Hero from "../components/Hero";


const SERVER_URL = 'http://localhost:8080'

export default function Home() {
    const [continents, setContinents] = useState([])
    const myList = [1, 2, 3, 4, 5, 6, 7]

    useEffect(() => {
        const continents = async () => {
            const url = SERVER_URL + '/api/continent';
            try {
                const result = await fetch(url);
                if (result.ok) {
                    const data = await result.json();
                    setContinents(data.continents);
                }
            } catch (error) {
                console.log(error)
            }
        }

        continents();
    }, [])

    const handleClick = (url) => {
        console.log(url)
    }

    return (
        <div>
            <div className='flex justify-center items-center min-h-[91vh]'>
                <Hero />
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-between items-end px-3">
                    <h3 className="font-bold p-3 text-lg">Continent</h3>
                    <a href="#" className="text-sm text-steal_blue leading-[1px] pb-3 pr-1">
                        view all
                    </a>
                </div>

                <ul className="flex flex-row px-3 space-x-3">
                    {continents.slice(0, 5).map((continent) => (
                        <li key={`${continent._id}`} className="transition ease-in-out hover:scale-105 w-1/5">
                            <button onClick={() => handleClick(`/api/continent/${continent.name}`)} className="">
                                <img src={`/img/${continent.image}`} alt="" className="rounded object-contain md:object-cover  h-8 md:h-48" />
                                <p className="text-center text-sm text-steal_blue py-3">
                                    {continent.name}
                                </p>
                            </button>
                        </li>
                    ))}
                    {/* <li className="transition ease-in-out hover:scale-105">
                        <a href="/continent" className="flex flex-col m-0">
                            <img src="/img/food-1.jpg" alt="" className="rounded blur-[2px] md:h-56" />
                            <p className="text-center text-sm text-steal_blue py-3">
                                view all
                            </p>
                        </a>
                    </li> */}
                </ul>
            </section>



            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-between items-end px-3">
                    <h3 className="font-bold text-lg py-3">Latest</h3>
                    <a href="#" className="text-sm text-steal_blue leading-[1px] pb-3 pr-1">
                        view all
                    </a>
                </div>
                <ul className="flex flex-row px-3 space-x-3">
                    {myList.slice(0, 5).map((num) => (
                        <li key={num} className="transition ease-in-out hover:scale-105 w-1/5">
                            <button className="">
                                <img src="/img/food-1.jpg" alt="" className="rounded object-contain md:object-fill md:h-48" />
                                <p className="text-center text-sm text-steal_blue py-3"> food </p>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="publish" className="bg-white dark:bg-gray-900">
                <div className="flex flex-row justify-center w-3/4 mx-auto mt-20">
                    <div className="basis-1/3">
                        <img src="/img/cooking-1.jpg" className="rounded-full" />
                    </div>
                    <div className="basis-1/3 px-3">
                        <img src="/img/cooking-2.jpg" className="rounded-full" />
                    </div>
                    <div className="basis-1/3">
                        <img src="/img/cooking-3.jpg" className="rounded-full" />
                    </div>
                </div>
                <div className="pb-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1
                        className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Publish your recipe for free today</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Publish your
                        recipe for thousands of people to try out.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-zinc-950 hover:bg-black focus:ring-4 focus:ring-black dark:focus:ring-black-900">
                            Publish Recipe
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}