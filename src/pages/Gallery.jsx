import gallery from "../utils/gallery.js";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import Alert from "../components/Alert.jsx";

const Gallery = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            <Alert text="Приятного просмотра"/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-2 bg-white shadow-lg rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {gallery.map((image, index) => (
                        <li
                            data-aos="fade-down" data-aos-duration="500"
                            key={index}
                            className="md:h-80 lg:h-100 xl:h-110 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
                        >
                            <img src={image.src} alt={`фото ${index + 1}`}
                                 className="object-center w-full h-full mx-auto rounded-lg "
                                 onClick={() => setSelectedImage(image.src)}
                            />
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => navigate("/")}
                    className="fixed bottom-5 left-5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Назад
                </button>
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

export default Gallery;
