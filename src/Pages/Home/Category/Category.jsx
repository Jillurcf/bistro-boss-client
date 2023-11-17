import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";

const Category = () => {
  return (
  <section>
    <Sectiontitle
    subHeading={"From 11.00am to 10.00pm"}
    heading={"Order Online"}
    ></Sectiontitle>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
      
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-3xl text-center upercase -mt-16 text-white">Salad</h3>
        </SwiperSlide>
      <SwiperSlide>
      <img src={slide2} alt="" />
      <h3 className="text-3xl text-center upercase -mt-16 text-white">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-3xl text-center upercase -mt-16 text-white">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-3xl text-center upercase -mt-16 text-white">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
      <img src={slide5} alt="" />
      <h3 className="text-3xl text-center upercase -mt-16 text-white">Salad</h3>
      </SwiperSlide>
      
    </Swiper>
  </section>
  );
};

export default Category;