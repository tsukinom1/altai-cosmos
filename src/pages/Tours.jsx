import { useNavigate } from "react-router-dom";
import places from "../utils/places";
import FeedbackCard from "../components/FeedbackCard.jsx"; // массив мест

const Tours = () => {
    const navigate = useNavigate();

    const handlePlaceClick = (urlName) => {
        navigate(`/tour/name/${encodeURIComponent(urlName)}`);
    };

    return (
        <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 bg-white shadow-lg rounded-lg">
            {/* Сообщение о турах */}
            <div className="bg-blue-100 border-l-4 pl-5 border-blue-500 text-black  my-3 rounded-md">
                <p className="text-lg font-medium">
                    Откройте для себя уникальные места и незабываемые впечатления!
                    Мы предлагаем туры для всех: от прогулок по природе до захватывающих приключений.
                </p>
            </div>

            <h1 className="text-3xl font-bold my-3 text-center">Доступные туры</h1>

            {/* Карточки туров */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place) => (
                    <li
                        key={place.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition cursor-pointer"
                        onClick={() => handlePlaceClick(place.urlName)}
                    >
                        <img src={place.img} alt={place.name} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{place.name}</h2>
                            <p className="text-sm text-gray-600 mt-2">{place.short}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-blue-600">{place.price}</span>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePlaceClick(place.urlName);
                                    }}
                                >
                                    Узнать больше
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => navigate("/")}
                className="fixed bottom-5 left-5  mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
            >
                Назад
            </button>

            {/* Завершающий CTA */}
            <div className="mt-10 text-center">
                <p className="text-lg font-semibold">Не можете выбрать? Свяжитесь с нами, и мы подберем для вас
                    идеальный маршрут!</p>
                <FeedbackCard/>
            </div>
        </div>
    );
};

export default Tours;
