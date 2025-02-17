import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import {useState} from "react";

const Feedback = ({feedbacks}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div id="feedbacks"
             className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{clickable: true}}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full mb-3"
                breakpoints={{
                    320: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                }}
                autoplay={{
                    delay: 20000,  // Время в миллисекундах между прокрутками (например, 3000 = 3 секунды)
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
                                768: {slidesPerView: 2},
                            }}
                            autoplay={{
                                delay: 2000,  // Время в миллисекундах между прокрутками (например, 3000 = 3 секунды)
                                disableOnInteraction: false,  // Автопрокрутка не останавливается при взаимодействии с слайдером
                            }}

                        >
                            {feedback.images.map((image, imgIndex) => (

                                <SwiperSlide key={imgIndex}>
                                    <img
                                        src={image}
                                        alt={`Фото ${imgIndex + 1}`}
                                        className="block mx-auto w-full h-full rounded-lg"
                                        onClick={() => setSelectedImage(image)}
                                    />
                                </SwiperSlide>


                            ))}
                        </Swiper>

                        {/* Текст отзыва */}
                        <p className="text-sm md:text-md p-2 text-gray-700">{feedback.text}</p>
                        <p className="text-sm md:text-md p-2 text-black font-bold">{feedback.author}</p>
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
    );
};

export default Feedback;
