import { useParams, useNavigate } from "react-router-dom";
import places from "../utils/places";

const PlaceCard = () => {
    const { urlName } = useParams();
    const navigate = useNavigate();
    const place = places.find((p) => p.urlName === urlName);

    if (!place) {
        return <div className="text-center text-2xl p-10">Место не найдено</div>;
    }

    return (
        <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{place.name}</h1>
            <img src={place.img} alt={place.name} className="w-full h-64 object-cover rounded-md mb-4" />

            <p className="text-lg mb-4">{place.full}</p>

            <div className="border-t pt-4">
                <p><strong>Цена:</strong> {place.price}</p>
                <p><strong>Длительность:</strong> {place.duration}</p>
                <p><strong>Трансфер:</strong> {place.transfer}</p>
                <p><strong>Группа:</strong> {place.group}</p>
                <p><strong>Снаряжение:</strong> {place.equipment}</p>
                <p><strong>Сложность:</strong> {place.difficulty}</p>
                <p><strong>Гид:</strong> {place.guide}</p>
                <p><strong>Питание:</strong> {place.food}</p>
                <p><strong>Особенности:</strong> {place.special}</p>
            </div>

            <button
                onClick={() => navigate("/tours")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
            >
                Назад
            </button>
        </div>
    );
};

export default PlaceCard;
