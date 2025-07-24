const SocialLinks = () => {
    return (
        <div className="text-white z-10 left-[-155px]  md:left-[380px] top-[241px] md:top-[2px] relative p-2 mt-8 md:mt-0">
            <ul className="flex md:block space-x-4 md:space-x-0 md:space-y-6 text-[#b0b2c3] static md:absolute md:right-8 justify-center">
                {/* LinkedIn */}
                <li>
                    <a
                        href="https://www.linkedin.com/in/anuragsinghbam/"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-8 h-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-full h-full fill-white hover:fill-blue-500 transition"
                        >
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </a>
                </li>

                {/* Twitter */}
                <li>
                    <a
                        href="https://twitter.com/anuragsinghbam"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-8 h-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-full h-full fill-white hover:fill-sky-400 transition"
                        >
                            <path d="M459.4 151.7c.3 4.1 .3 8.2 .3 12.4 0 126.1-95.9 271.5-271.5 271.5-54 0-104.4-15.9-146.7-43.2 7.6 .9 15.2 1.2 23.1 1.2 44.8 0 86.1-15.2 118.8-40.9-41.9-.9-77.2-28.4-89.4-66.5 5.9 .9 11.8 1.5 18.2 1.5 8.5 0 16.8-1.2 24.6-3.3-43.8-8.8-76.7-47.4-76.7-93.8v-1.2c12.9 7.1 27.9 11.5 43.8 12.1-26.1-17.4-43.2-47-43.2-80.9 0-17.9 4.7-34.6 13-49.1 47.2 58 117.8 96.1 197.2 100.3-1.5-7.1-2.4-14.7-2.4-22.4 0-54.1 43.8-97.9 97.9-97.9 28.2 0 53.7 11.8 71.6 30.7 22.4-4.1 43.2-12.6 62.1-24-7.4 23.1-23.1 42.4-43.5 54.6 20-2.1 39.1-7.6 56.7-15.3-13.9 19.8-31.3 37.4-51.6 51.6z"/>
                        </svg>
                    </a>
                </li>

                {/* Email */}
                <li>
                    <a
                        href="mailto:anuragsinghbam@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-8 h-8"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-full h-full fill-white hover:fill-red-400 transition"
                        >
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;
