"use client";

const LatestWork = () => {
  const goToWork = () => {
    const element = document.querySelector('.latest-work');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full -bottom-64 flex justify-center items-center relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
      <button onClick={goToWork} className="bg-[#4595eb] py-2 cursor-pointer px-4 md:px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative scale-100 md:scale-110 hover:scale-110 md:hover:scale-120 ease-in-out duration-100 group mb-16 md:mb-20">
        Latest Works
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 100 100"
          className="absolute rotate-90 left-1/2 -translate-x-1/2 top-10 md:top-11 group-hover:top-11 md:group-hover:top-12 ease-in-out duration-100"
        >
          <g transform="translate(0,-952.36218)">
            <path
              d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
              fill="#fff"
              stroke="white"
              strokeWidth="2"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default LatestWork;