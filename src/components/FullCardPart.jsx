import {useState} from "react";

const FullCardPart = ({place}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="bg-white shadow-md rounded-lg mb-6 flex flex-col md:flex-row gap-5 md:items-center">
                <div className="sm:flex w-full gap-3 md:w-2/3">
                    <img
                        src={place.image}
                        alt={place.name}
                        className="hover:scale-105 transition-transform duration-500  w-full my-3 sm:w-1/2 h-40  lg:h-60 object-cover rounded-lg cursor-pointer"
                        onClick={() => setSelectedImage(place.image)}
                    />
                    <img
                        src={place.image2}
                        alt={place.name}
                        className="hover:scale-105 transition-transform duration-500 w-full my-3 sm:w-1/2 h-40  lg:h-60 object-cover rounded-lg cursor-pointer"
                        onClick={() => setSelectedImage(place.image2)}
                    />
                </div>
                <div className="md:w-1/3 md:text-left">
                    <h2 className="text-md md:text-xl font-semibold">{place.name}</h2>
                    <p className="text-gray-700">{place.description}</p>
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <img src={selectedImage} alt="Full view" onClick={() => setSelectedImage(null)} className="max-w-full max-h-full rounded-lg"/>
                </div>
            )}
        </>
    );
};
export default FullCardPart;