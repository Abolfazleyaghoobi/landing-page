import React from "react";
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const projects = [
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img1,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img1,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img1,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img2,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img2,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img2,
  },
  {
    title: "Sobha Hearland II Villas",
    description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    rating: 4.83,
    image: img3,
  },
];


const RecentProjects = () => {
  return (
    <section className="py-12 ">
      <p className="dark:text-gray-300">Best Project of the Years</p>
        <h2 className="text-3xl font-bold  text-gray-800 mb-8 dark:text-gray-200">Our recent projects</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
       loop="true"
        modules={[Pagination]}
        className="mySwiper !py-4"
      >
        {projects.map((project, index) => (
            <SwiperSlide key=
            {index} className=" shadow-lg rounded-lg overflow-hidden xl:w-[333px] lg:w-[250px] h-[fit-content]  ">
              <img src={project.image} alt={project.title} className="w-full  object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{project.title}</h3>
                <p className="text-gray-600 mt-2 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-yellow-500 text-lg">⭐ {project.rating}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
       
      </Swiper>
    </section>
  );
};

export default RecentProjects;
