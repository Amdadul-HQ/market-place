
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../../assets/carousel1.jpg'
import pic2 from '../../assets/carousel2.jpg'
import pic3 from '../../assets/carousel3.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation , Autoplay } from 'swiper/modules';

const SliderComponent = () => {

    return (
        <>
        <section className='container mx-auto h-[600px] my-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation , Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><div className='w-full h-full rounded-2xl bg-no-repeat flex flex-col justify-center items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${pic1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
                }}>
            </div></SwiperSlide>
          <SwiperSlide><div className='w-full h-full rounded-2xl bg-no-repeat flex flex-col justify-center items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${pic2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
                }}>
            </div></SwiperSlide>
          <SwiperSlide><div className='w-full h-full rounded-2xl bg-no-repeat flex flex-col justify-center items-center' style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${pic3})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
                }}>
            </div></SwiperSlide>
        </Swiper>
        </section>
      </>
    );
};

export default SliderComponent;