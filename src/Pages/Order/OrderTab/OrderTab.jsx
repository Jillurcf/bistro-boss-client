import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
       
          <div className="grid md:grid-cols-3 gap-10">
            {items.map((item) => (
               <SwiperSlide key={item._id}>
              <FoodCard key={item.id} item={item}></FoodCard>
              </SwiperSlide>
            ))}
          </div>
          1
      
      </Swiper>
    </div>
  );
};

export default OrderTab;
