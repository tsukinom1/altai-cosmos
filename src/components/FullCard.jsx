import { useParams } from "react-router-dom";
import {FaWhatsapp} from "react-icons/fa";
import FullCardPart from "./FullCardPart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import tours from "../utils/tours";
import "swiper/css";
import "swiper/css/navigation";
import Conditions from "./Conditions.jsx";
import {useState} from "react";

const FullCard = () => {
    const { id } = useParams();
    const tour = tours.find((t) => t.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null);


    if (!tour) {
        return <div className="text-center text-2xl p-10">Экскурсия не найдена</div>;
    }

    return (
        <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-md md:text-3xl font-bold mb-4">{tour.title}</h1>
            <img
                src={tour.src}
                alt={tour.title}
                className="hover:scale-105 transition-transform duration-500  w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-lg mb-4">{tour.fullDescription}</p>

            {/* Маршрут */}
            <h2 className="text-2xl font-semibold mt-6">Маршрут:</h2>
            {tour.places.map((place, index) => (
                <FullCardPart key={index} place={place}/>
            ))}
            <Conditions conditions={tour.conditions}/>
            <p className="text-sm md:text-lg mb-2"><b>Трансфер: </b>{tour.transfer !== 'no' ? tour.transfer
                : `Невозможен`}</p>
            <p className="text-sm md:text-lg mb-2"><b>Обеспечение
                снаряжением: </b>{tour.equepments === 'yes' ? `Обычно предоставляется необходимое снаряжение, включая шлемы и защитную одежду.`
                : `Необходимое снаряжение, включая шлемы и защитную одежду, не предоставляется`}</p><p
            className="text-sm md:text-lg mb-2"><b>Групповые или индивидуальные
            туры: </b>{tour.group === 'yes' ? `Можно выбрать экскурсию в группе или заказать индивидуальный тур.`
            : `Индивидуальные туры: Можно выбрать экскурсию только для индивидуальный тура.`}</p>
            <p className="text-sm md:text-lg mb-2"><b>Цена за тур: </b> {tour.price}</p>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <a href="https://wa.me/78128766436" className="flex gap-x-2"><FaWhatsapp size={20} />Записаться на тур</a>
            </button>

            {/* Галерея */}
            <h2 className="text-2xl font-semibold mt-6 mb-4">Фотогалерея</h2>
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
                {tour.gallery.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Gallery ${index}`}
                            className="w-full h-50 md:h-100 object-cover rounded-lg"
                            onClick={() => setSelectedImage(img)}
                        />
                    </SwiperSlide>
                ))}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                        <img src={selectedImage} alt="Full view" onClick={() => setSelectedImage(null)} className="max-w-full max-h-full rounded-lg"/>
                    </div>
                )}
            </Swiper>
        </div>
    );
};

export default FullCard;
