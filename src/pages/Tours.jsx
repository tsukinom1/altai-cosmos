import {useNavigate} from "react-router-dom";
import {useState} from "react";
import places from "../utils/places";
import FeedbackCard from "../components/FeedbackCard.jsx";
import Alert from "../components/Alert.jsx";
import Header from "../components/Header.jsx";

const Tours = () => {
    const navigate = useNavigate();
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    // Функция для выбора/отмены тура
    const togglePlaceSelection = (place) => {
        setSelectedPlaces((prev) =>
            prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]
        );
    };

    // Формируем сообщение для WhatsApp
    const sendToWhatsApp = () => {
        if (!name || !phone || selectedPlaces.length === 0) {
            alert("Пожалуйста, заполните все поля и выберите хотя бы одно место!");
            return;
        }

        const message = `Здравствуйте! Хочу забронировать тур.\n
        Имя: ${name}\n
        Телефон: ${phone}\n
        Выбранные места: ${selectedPlaces.join(", ")}.
        \nМожете рассказать подробнее?`;

        const encodedMessage = encodeURIComponent(message); // Кодируем безопасно
        const whatsappNumber = "79284590455"; // Без "+"

        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        console.log("WhatsApp Link:", whatsappLink); // Проверяем, что ссылка правильная

        window.open(whatsappLink, "_blank");
    }

    return (
        <>
            <Header/>
            <Alert text="Выберите подходящие для вас места и мы составим маршрут"/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold my-3 text-center">Доступные туры</h1>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.map((place) => (
                        <li
                            data-aos="fade-down" data-aos-duration="1000"
                            key={place.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
                        >
                            <img src={place.img} alt={place.name} className="w-full h-60 sm:h-80 md:h-60 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{place.name}</h2>
                                <p className="text-sm text-gray-600 mt-2">{place.short}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span
                                        className="text-sm md:text-lg font-bold text-blue-600">Цена: {place.price}</span>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <button
                                        className="w-1/2 text-sm md:text-md p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
                                        onClick={() => navigate(`/tour/name/${encodeURIComponent(place.urlName)}`)}
                                    >
                                        Подробнее
                                    </button>

                                    <button
                                        className={`w-1/2 text-sm md:text-md p-2 rounded-md transition ${selectedPlaces.includes(place.name) ? "bg-green-500 text-white hover:bg-green-700" : "bg-gray-300 text-black hover:bg-gray-400"}`}
                                        onClick={() => togglePlaceSelection(place.name)}
                                    >
                                        {selectedPlaces.includes(place.name) ? "Выбрано" : "Выбрать"}
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Форма отправки */}
                <div className="md:w-1/2 lg:w-2/5 mx-auto mt-8 p-4 border border-gray-300 rounded-lg">
                    <h2 className="text-xl font-semibold mb-3 text-center">Заполните данные для связи</h2>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 mb-3 border rounded-md"
                    />
                    <input
                        type="tel"
                        placeholder="Ваш номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 mb-3 border rounded-md"
                    />
                    <button
                        onClick={sendToWhatsApp}
                        className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
                    >
                        Отправить в WhatsApp
                    </button>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-md md:w-2/3 mx-auto md:text-lg">Не можете выбрать? Свяжитесь с нами, и мы
                        подберем для вас
                        идеальный маршрут!</p>
                    <FeedbackCard/>
                </div>
            </div>
        </>
    );
};

export default Tours;
