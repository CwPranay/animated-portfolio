const SocialLinks = () => {
    return (
        <div className="text-white z-10  p-2">

            <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
                <li><a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank" rel="noreferrer">
                   

                </a></li>
                <li><a href="https://twitter.com/anuragsinghbam" target="_blank" rel="noreferrer"></a></li>
                <li><a href="https://www.instagram.com/procodrr/" target="_blank" rel="noreferrer">{/* Instagram SVG */}</a></li>
                <li><a href="mailto:anuragsinghbam@gmail.com" target="_blank" rel="noreferrer">{/* Email SVG */}</a></li>
                <li><a href="https://www.youtube.com/@procodrr" target="_blank" rel="noreferrer">{/* YouTube SVG */}</a></li>
            </ul>


        </div>
    );
};

export default SocialLinks;
