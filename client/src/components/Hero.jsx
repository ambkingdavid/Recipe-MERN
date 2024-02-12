export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto flex flex-row lg:py-16">
                <div className="flex flex-col justify-center items-center text-center md:basis-3/5 lg:basis-2/3">
                    <h1
                        className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark_slate_gray md:text-5xl lg:text-6xl dark:text-white">
                        Select from a large variety of delicious recipe ideas</h1>
                    <p className="mb-8 text-lg font-normal text-dark_slate_gray lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Explore
                        our large selection of delicious recipe ideas including delicious vegan diets, continental dishes and
                        lots
                        more.</p>
                    <div className="flex-row justify-center sm:space-y-0">
                        <button
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-brown-100 hover:bg-brown-200 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900">
                            Explore latest
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="hidden md:flex justify-end md:basis-2/5 lg:basis-1/3">
                    <img src="/img/food-cover.jpg" alt="" className="md:rounded-l-full md:rounded-b-full  lg:rounded-full " />
                </div>
            </div>
        </section>
    )
}