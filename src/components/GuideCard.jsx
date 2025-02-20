import React from "react";
import {FaPhone, FaTelegram, FaWhatsapp} from "react-icons/fa";
import Alert from "./Alert.jsx";

const GuideCard = ({guide}) => {
    return (
        <div>
            <Alert text="Коротко обо мне"/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-2 my-3 md:p-6">
                <div
                    className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-5">
                    <div className="w-1/1 lg:w-4/10">
                        <img
                            src={guide.photo1}
                            alt="Guide"
                            className="w-full sm:w-7/10 mx-auto h-90 md:h-80 lg:h-70 my-5 rounded-lg"
                        />
                        <img
                            src={guide.photo2}
                            alt="Guide"
                            className="w-full sm:w-7/10 mx-auto h-90 md:h-80 lg:h-70 my-5 rounded-lg"
                        />
                    </div>
                    <div className="w-1/1 lg:w-6/10">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">{guide.name}</h2>
                        <p className="text-lg lg:text-xl text-gray-600 ">{guide.description}</p>
                        <p className="text-lg lg:text-xl text-gray-600 ">{guide.description2}</p>
                        <p className="text-lg lg:text-xl text-gray-600 ">{guide.description3}</p>
                        <div
                            className="flex flex-col space-y-3 my-3 justify-center">
                            <a
                                href="https://wa.me/+79284590455"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lg:w-1/2 hover:scale-105 transition-transform text-lg duration-500 flex items-center space-x-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                <FaWhatsapp size={20}/>
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="https://t.me/altaykosmos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lg:w-1/2 hover:scale-105 transition-transform text-lg duration-500 flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                <FaTelegram size={20}/>
                                <span>Telegram</span>
                            </a>
                            <a
                                href="tel:+79284590455"
                                className="lg:w-1/2 hover:scale-105 transition-transform text-lg duration-500 flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                            >
                                <FaPhone size={20}/>
                                <span>Позвонить</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
