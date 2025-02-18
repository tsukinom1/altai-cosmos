import {FaPhone, FaTelegram, FaWhatsapp} from "react-icons/fa";
import React from "react";
import Alert from "./Alert.jsx";

const Guide = () => {
    return (
        <div className="">
            <Alert text="Коротко о себе"/>
            <section data-aos="zoom-in-up" data-aos-duration="1000"
                     className="bg-white container mx-auto w-9/10 md:w-3/4 p-2 md:p-6">
                {/*<h2 className="text-lg md:text-4xl font-bold text-center my-2">Коротко о себе:</h2>*/}
                <div className="md:px-3 mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img
                            src={`${import.meta.env.BASE_URL}photos/img-5.jpg`}
                            alt="Ваше изображение"
                            className="hover:scale-105 transition-transform duration-500 w-50  h-70 md:w-75 lg:w-80 lg:h-90 xl:h-120  mx-auto  border-4 rounded-3xl border-gray-300"
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold">Ваш гид: Alina Cosmos</h2>
                        <p className="mt-2 text-gray-600">
                            Привет! Я профессиональный гид с многолетним опытом путешествий по Алтаю.
                            Провожу индивидуальные и групповые туры до 4 людей, рассказываю удивительные истории о местах силы и
                            показываю лучшие маршруты.
                        </p>
                        <div className="flex gap-2 my-3 justify-center md:justify-start ">
                            <a
                                href="https://wa.me/+79284590455"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                <FaWhatsapp size={20}/>
                                <span>Связаться</span>
                            </a>
                            <a
                                href="tel:+79284590455"
                                className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                            >
                                <FaPhone size={20}/>
                                <span>Позвонить</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Guide;
