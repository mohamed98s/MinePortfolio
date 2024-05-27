// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/2w.png",
          link: "https://mohamed98s.github.io/Weather-app/",
        },
        {
          title: "title",
          path: "/recipe.png",
          link: "https://mohamed98s.github.io/Recipes-webpage-using-api/",
        },
        {
          title: "title",
          path: "/login.png",
          link: "https://mohamed98s.github.io/signup-login/",
        },
        {
          title: "title",
          path: "/ecom.png",
          link: "https://mohamed98s.github.io/newecommerce/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/jquery.png",
          link: "https://mohamed98s.github.io/jQuery-assignment/",
        },
        {
          title: "title",
          path: "/ecomtype.png",
          link: "https://mine-portfolio-vert.vercel.app/",
        },
        {
          title: "title",
          path: "/portfolio.png",
          link: "https://mine-portfolio-vert.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://mohamed98s.github.io/TODO-APP/",
        },
      ],
    },
  ],
};

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/pagination';

//import required modules
import  { Pagination } from "swiper/modules";
// import SwiperCore from 'swiper/core'
//icons
import { BsArrowRight } from "react-icons/bs";
//next image
import Image from "next/image";

// SwiperCore.use([Pagination])

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <a
                      className="flex items-center justify-center relative overflow-hidden group"
                      key={index}
                      href={image.link}
                      target="_blank"
                    >
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                          {/* ocon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
