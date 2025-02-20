import React from "react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Alert from "./Alert.jsx";

const ProductCard = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const products = [
        {
            name: "Пантогемотаген",
            description:
                "— препарат, получаемый из пантов благородного оленя и крови. Он используется в традиционной медицине для улучшения общего состояния, повышения иммунитета и обмена веществ. Основные компоненты включают аминокислоты, микроэлементы и витамины. Применяется для лечения анемии и восстановления сил, но перед использованием рекомендуется проконсультироваться с врачом.",
            price: "0,5 бутылочка 5 500 ₽",
            images: [`${import.meta.env.BASE_URL}images/pantogematogen.jpg`],
        },
        {
            name: "Слайсы из рогов морала",
            description:
                "— это продукт, получаемый из рогов благородного оленя, используемый в традиционной медицине. Они содержат полезные вещества, такие как аминокислоты и витамины, и могут улучшать общее состояние здоровья и иммунитет. Перед использованием рекомендуется проконсультироваться с врачом.",
            price: "25 грамм 3 500 ₽",
            images: [
                `${import.meta.env.BASE_URL}images/pants-2.jpg`,
                `${import.meta.env.BASE_URL}images/pants-3.jpg`,
                `${import.meta.env.BASE_URL}images/slice.jpg`,
            ],
        },
    ];

    return (
        <>
            <Alert text="Наша эксклюзивная продукция"/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-4 my-6">
                <div
                    className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-6"
                    role="alert"
                >
                    <p className="text:md lg:text-xl font-bold">Что такое панты?</p>
                    <p className="text-sm lg:text-lg">
                        — это молодые рога благородного оленя, используемые в
                        традиционной медицине, особенно в Восточной Азии. Они
                        содержат полезные вещества, такие как аминокислоты и
                        минералы, и могут поддерживать здоровье крови.
                    </p>
                </div>

                <div className="lg:flex flex-col">
                    {products.map((product, index) => (
                        <div className="lg:flex gap-5 my-5 items-center" key={index}>
                            <div className="w-full lg:w-2/5">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation
                                    pagination={{clickable: true}}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    className=""
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true,
                                    }}
                                >
                                    {product.images.map((image, imgIndex) => (
                                        <SwiperSlide key={imgIndex}>
                                            <img
                                                src={image}
                                                alt={`Фото ${imgIndex + 1}`}
                                                className="w-full sm:w-2/3 md:1/2 lg:w-300 mx-auto  hover:scale-105 transition-transform duration-300 h-120 sm:100 lg:h-120 object-center rounded-lg cursor-pointer"
                                                onClick={() =>
                                                    setSelectedImage(image)
                                                }
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="w-full lg:w-3/5">
                                <h3 className="my-2 text-lg md:text-xl font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-md md:text-lg text-gray-500">
                                    {product.description}
                                </p>
                                <div className="mt-2 flex flex-col md:flex-row justify-start gap-x-10 md:items-center">
                                    <span
                                        className="text-md md:text-lg font-bold text-blue-600 my-2">Цена: {product.price}</span>

                                    <span className="text-lg text-blue-500 font-bold">
                                    </span>
                                    <button
                                        className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
                                        <a href="#feedbackCard">Связаться с нами</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                        <img
                            src={selectedImage}
                            alt="Full view"
                            onClick={() => setSelectedImage(null)}
                            className="max-w-full max-h-full rounded-lg cursor-pointer"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductCard;
