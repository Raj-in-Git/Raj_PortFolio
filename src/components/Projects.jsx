import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function Projects() {
  const projects = [
    { title: "3D Print Store", description: "E-commerce app for 3D printed products.", link: "https://github.com/Raj-in-Git/3D_Print_store.git" },
    { title: "MES Dashboard", description: "Dashboard for manufacturing execution system.", link: "https://github.com/Raj-in-Git/MES_Dashboard.git" },
    { title: "Task Board", description: "Task Board App to track the task.", link: "https://github.com/Raj-in-Git/TaskBoard.git" },
    { title: "Image 2 STL", description: "App used to convert image to STL for 3D Printing", link: "https://github.com/Raj-in-Git/img2stl.git" },
    { title: "Image 2 Text", description: "App to give the text from the Image", link: "https://github.com/Raj-in-Git/img2txt.git" },
    { title: "XMES", description: "XMES APP to handle XML & Json Files", link: "https://github.com/Raj-in-Git/xMES.git" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          className="project-swiper"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 shadow-md text-center min-h-[220px] flex flex-col justify-center">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3">{p.description}</p>
                <a
                  href={p.link}
                  target="_blank"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Code →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
