import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

const Feedback = ({feedbacks}) => {
    return (

        <div id="feedbacks" className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden ">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={2}
                className="w-full mb-3"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
            {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center text-center md:p-6">
                        <img src={feedback.src} alt="Изображение отзыва" className="w-32 h-32 md:w-3/4 md:h-60 mx-auto object-cover rounded-full mb-4" />
                        <p className="text-sm md:text-md p-2 text-gray-700">{feedback.text}</p>
                        <p className="text-sm md:text-md p-2 text-black">{feedback.author}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedback;