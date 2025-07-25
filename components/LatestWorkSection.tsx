"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LatestWorkSection: React.FC = () => {
  return (
    <section id="latest-works" className="latest-work max-w-screen-xl mx-auto px-2 sm:px-4 relative pb-8 sm:pb-16">
      <h2 className="text-2xl xs:text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-2 sm:px-4 py-2 w-max mx-auto text-center text-[#1788ae] border-b border-[#1788ae] sm:border-b-2">
        Latest Works
      </h2>

      {/* ProCodrr */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        
        <Link href="https://procodrr.com" className="flex w-full touch-manipulation relative justify-center sm:justify-start cursor-pointer">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <Image 
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-pointer"
              src="/images/ProCodrr.webp" 
              alt="ProCodrr Platform Screenshot" 
              width={400}
              height={300}
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              ProCodrr
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </Link>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">ProCodrr</h3>
          <span className="text-[#459bd5] text-base md:text-lg">(Coding Platform)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            Deeply understand advanced concepts, practice with real-world
            exercises, build expertise with hands-on projects to boost your
            career.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#express.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#node.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#swiper.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoDB</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoose</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
          </ul>
        </div>
      </div>

      {/* EazyGrad */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">EazyGrad</h3>
          <span className="text-[#ffe578] text-base md:text-lg">(EdTech Startup)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. Created new features and pages. Worked as a
            team with product manager and ux designer.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#express.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#node.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#swiper.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoDB</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoose</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
          </ul>
        </div>
        
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        
        <Link href="#" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start cursor-pointer">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <Image 
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-pointer"
              src="/images/eazygrad.webp" 
              alt="EazyGrad Platform Screenshot" 
              width={400}
              height={300}
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              EazyGrad
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </Link>
      </div>

      {/* Harigurus */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        
        <Link href="#" className="flex w-full relative justify-center sm:justify-start cursor-pointer">
          <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <Image 
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-pointer"
              src="/images/harigurus.webp" 
              alt="Harigurus Platform Screenshot" 
              width={400}
              height={300}
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Harigurus
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </Link>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">Harigurus</h3>
          <span className="text-[#fc815c] text-base md:text-lg">(Event Booking)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#express.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#node.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#swiper.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoDB</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoose</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
          </ul>
        </div>
      </div>

      {/* Web Dev English */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">Web Dev English</h3>
          <span className="text-[#47afa1] text-base md:text-lg">(Coaching and Consulting)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. Created new features and pages. Worked as a
            team with product manager and ux designer.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#express.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#node.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#swiper.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoDB</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoose</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
          </ul>
        </div>
        
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        
        <Link href="#" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start cursor-pointer">
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <Image 
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-pointer"
              src="/images/web-dev-english.webp" 
              alt="Web Dev English Platform Screenshot" 
              width={400}
              height={300}
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Web Dev English
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </Link>
      </div>

      {/* Pioneer Digital */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        
        <Link href="#" className="flex w-full relative justify-center sm:justify-start cursor-pointer">
          <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <Image 
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-pointer"
              src="/images/pioneer-digital.webp" 
              alt="Pioneer Digital Platform Screenshot" 
              width={400}
              height={300}
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Pioneer Digital
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </Link>

        <div className="w-full">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">Pioneer Digital</h3>
          <span className="text-[#fc815c] text-base md:text-lg">(Digital Marketing Agency)</span>
          <p className="text-justify text-sm md:text-base mt-2">
            One of the featured site while working with TheBrandWick.com
            (agency). Worked as a frontend developer to make the site
            user-interactive and responsive.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#express.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#node.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#swiper.js</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoDB</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#mongoose</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
          </ul>
        </div>
      </div>

      {/* Vertical timeline line */}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LatestWorkSection