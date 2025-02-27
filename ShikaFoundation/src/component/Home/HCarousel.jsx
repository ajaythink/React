import { Carousel, IconButton } from "@material-tailwind/react";
import banner1 from "../../assets/HomeBanner/Banner1-scaled.webp";

export function HCarousel() {
  return (
    <Carousel
      // className="rounded-xl"
      autoplay={true} // Enable autoplay
      autoplayDelay={3000} // Set autoplay delay to 3000ms (3 seconds)
      loop={true} // Enable infinite looping
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div>
        <img
          src={banner1}
          alt="image 2"
          className="w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-6 sm:py-8 md:py-10">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
            Study in Dubai
          </h1>
          <a
            className="bg-yellow-100 px-4 sm:px-6 py-2 rounded text-xs sm:text-base hover:bg-yellow-500 transition text-black font-bold"  
            href="#"
          >
            Donate Now
          </a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
    </Carousel>
  );
}
