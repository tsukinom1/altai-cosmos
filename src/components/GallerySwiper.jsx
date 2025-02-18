import {useState} from 'react';
import {Link} from "react-router-dom";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Alert from "./Alert.jsx";
import gallery from "../utils/gallery.js";

const GallerySwiper = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <Alert text="Галерея"/>
            <div data-aos="zoom-in-down" data-aos-duration="1000" id="feedbacks"
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
                        1025: {slidesPerView: 2},
                        1200: {slidesPerView: 3},
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                >
                    {gallery.map((image, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center text-center">
                            <img
                                src={image.src}
                                alt={`Фото ${index + 1}`}
                                className="hover:scale-105 block mx-auto px-3 w-full h-80 sm:w-100 sm:h-100 md:w-96 md:h-96 md:w-80 lg:w-[500px] lg:h-90 xl:h-70 object-cover rounded-lg"
                                onClick={() => setSelectedImage(image.src)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Link to="/gallery"
                      className="animate-bounce block mx-auto my-10 w-fit text-center bg-green-600 hover:bg-green-400 text-white py-3 px-4 rounded-lg transition duration-300">
                    Посмотреть все фотографии
                </Link>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <img src={selectedImage} alt="Full view" onClick={() => setSelectedImage(null)}
                         className="max-w-full max-h-full rounded-lg"/>
                </div>
            )}
        </>
    )
        ;
};

export default GallerySwiper;