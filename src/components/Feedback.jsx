import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import React, {useState} from "react";
import Alert from "./Alert.jsx";

const Feedback = ({feedbacks}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <Alert text="Отзывы наших клиентов"/>
            <div data-aos="zoom-in-down" data-aos-duration="1500" id="feedbacks"
                 className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6  bg-white shadow-lg rounded-2xl overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="w-full mb-3"
                    breakpoints={{
                        320: {slidesPerView: 1},
                        1200: {slidesPerView: 2},
                    }}
                    autoplay={{
                        delay: 10000,  // Время в миллисекундах между прокрутками (например, 3000 = 3 секунды)
                        disableOnInteraction: false,  // Автопрокрутка не останавливается при взаимодействии с слайдером
                    }}
                >
                    {feedbacks.map((feedback, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center text-center">
                            {/* Внутренний Swiper с изображениями отзыва */}
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{clickable: true}}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="w-3/4 h-60 mb-4"
                                breakpoints={{
                                    320: {slidesPerView: 1},
                                    1200: {slidesPerView: 2},
                                }}
                                autoplay={{
                                    delay: 3000,  // Время в миллисекундах между прокрутками (например, 3000 = 3 секунды)
                                    disableOnInteraction: false,  // Автопрокрутка не останавливается при взаимодействии с слайдером
                                }}

                            >
                                {feedback.images.map((image, imgIndex) => (

                                    <SwiperSlide key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`Фото ${imgIndex + 1}`}
                                            className="hover:scale-105 block mx-auto w-full sm:w-80 md:w-96 lg:w-[500px] h-auto object-cover rounded-lg"
                                            onClick={() => setSelectedImage(image)}
                                        />
                                    </SwiperSlide>


                                ))}
                            </Swiper>

                            {/* Текст отзыва */}
                            <p className="text-sm sm:text-md md:text-lg p-2">" {feedback.text} "</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {selectedImage && (
                    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                        <img src={selectedImage} alt="Full view" onClick={() => setSelectedImage(null)}
                             className="max-w-full max-h-full rounded-lg"/>
                    </div>
                )}
            </div>
        </>
    );
};

export default Feedback;
