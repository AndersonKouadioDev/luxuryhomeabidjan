"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Parallax,
} from "swiper/modules"; // <-- ✅ ici !
import "swiper/css"; // Importation du CSS de base
import "swiper/css/effect-coverflow"; // Importation du CSS pour l'effet Coverflow
import "swiper/css/parallax"; // Importation du CSS pour l'effet Parallax

const images = [
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

];

function HeroSevices() {
  return (
    //     <Swiper
    //     modules={[Autoplay, EffectCoverflow, Pagination]} // Ajout de Pagination
    //     effect="coverflow"
    //     grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView={3} // Nous gardons 3 images visibles à la fois
    //     loop={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     coverflowEffect={{
    //       rotate: 40, // Angle de rotation des slides (ajuste pour plus ou moins de profondeur)
    //       stretch: 20, // Augmente un peu l'écart entre les images
    //       depth: 200, // Proximité des images arrière
    //       modifier: 1.5, // Ajuste l'intensité de l'effet
    //       slideShadows: true, // Ajoute des ombres pour l'effet de profondeur
    //     }}
    //     pagination={{
    //       clickable: true,
    //       type: 'bullets', // Utilise des points de pagination
    //     }}
    //     className="w-full h-[300px] relative"
    //   >
    //     {images.map((src, index) => (
    //       <SwiperSlide key={index}>
    //         <img
    //           src={src}
    //           alt={`Slide ${index}`}
    //           className="w-full h-full object-cover rounded-lg"
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    <div className="w-[90%] mx-auto">
     {/* Effet nuage à gauche */}
     <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white grayscale blur-2xl via-transparent to-transparent"></div>

    {/* Effet nuage à droite */}
    <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white via-transparent to-transparent"></div>


      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
       slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true, // Permet de cliquer sur les points pour naviguer
        }}
        className="w-full h-[500px]  swiper-slide-custom"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSevices;

// 'use client'
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function HeroServices() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
