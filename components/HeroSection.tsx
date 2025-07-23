import SocialLinks from "./SocialLinks";
import { League_Spartan } from "next/font/google";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"], // Choose the weights you need
    style: ["normal", "italic"],          // Optional: if you want italics
    display: "swap",
});


const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Adjust as needed
    display: "swap",
});

const HeroSection = () => (
    <div className="flex w-[42vw]  -mt-10 relative">
        <div className="w-full px-4  max-w-screen-xl mx-auto">
            {/* Hero SVGs */}
            <img
                src="/images/p.svg"
                alt="Decorative SVG"
                className="pointer-events-none absolute  left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px]"
              />




            <div className="z-10 relative  left-[-55%] top-[-10%] text-left">
                <h1 className={`${leagueSpartan.className} font-semibold text-4xl  md:text-[70px]`}>
                    Pranay Gurav
                </h1>

                <p className={`${merriweather.className} font-medium pointer-events-none italic mt-3 mb-4`}>
                    MERN Stack Developer
                </p>

                <button className="bg-[#4595eb] py-2 px-5 font-serif rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] mt-4 relative hover:scale-110 ease-in-out duration-100 group">
                    Contact Me
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width="44"
                        height="44"
                        viewBox="0 0 100 100"
                        className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
                    >
                        <g transform="translate(0,-952.36218)">
                            <path
                                d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                                fill="#fff"
                                stroke="white"
                                strokeWidth={2}
                            />
                        </g>
                    </svg>



                </button>
            </div>
        </div>
        <SocialLinks />
    </div>
);

export default HeroSection;
