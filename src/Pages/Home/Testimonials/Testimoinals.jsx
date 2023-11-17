import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimoinals = () => {
const [reviews, setRevies] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data=> setRevies(data))
},[])

  return (
    <section className="my-20">
      <Sectiontitle
        subHeading="What out client says"
        heading="Testimonials"
      ></Sectiontitle>
   
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        {
            reviews.map(review =>  <SwiperSlide
                 key={review._id}                 
                 >
                    <div className="flex flex-col items-center my-16 mx-24">
                        <Rating
                           style={{ maxWidth: 180 }}
                           value={review.rating}
                        //    onChange={setRating}
                        readOnly
                        ></Rating>
                        <p className="py-8">{review.details}</p>
                        <h3 className="text-2xl text-orange-400"></h3>
                    </div>
                 </SwiperSlide> )
        }
        
      </Swiper>
    </section>
  );
};

export default Testimoinals;
