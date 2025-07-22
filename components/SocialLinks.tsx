const SocialLinks = () => {
    return (
        <div className="text-white z-10  p-2">

            <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
                <li><a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="32"
                        height="32"
                        fill="white"
                    >
                        <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5..."
                        />
                    </svg>


                </a></li>
                <li><a href="https://twitter.com/anuragsinghbam" target="_blank" rel="noreferrer">{/* Twitter SVG */}</a></li>
                <li><a href="https://www.instagram.com/procodrr/" target="_blank" rel="noreferrer">{/* Instagram SVG */}</a></li>
                <li><a href="mailto:anuragsinghbam@gmail.com" target="_blank" rel="noreferrer">{/* Email SVG */}</a></li>
                <li><a href="https://www.youtube.com/@procodrr" target="_blank" rel="noreferrer">{/* YouTube SVG */}</a></li>
            </ul>


        </div>
    );
};

export default SocialLinks;
