import {useParams, useNavigate} from "react-router-dom";
import places from "../utils/places.js";
import FeedbackCard from "../components/FeedbackCard.jsx";
import Header from "../components/Header.jsx";
import Alert from "../components/Alert.jsx";

const PlaceCard = () => {
    const {urlName} = useParams();
    const navigate = useNavigate();
    const place = places.find((p) => p.urlName === urlName);

    if (!place) {
        return <div className="text-center text-2xl p-10">Место не найдено</div>;
    }

    return (
        <>
            <Header />
            <Alert text={place.name} />
            <div data-aos="zoom-in" data-aos-duration="1000"
                 className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 bg-white shadow-lg rounded-lg">
                <img src={place.img} alt={place.name}
                     className="hover:scale-105 transition-transform duration-500 md:w-9/10 md:mx-auto md:max-h-120 object-center rounded-md mb-4"/>

                <p className="text-md md:text-lg mb-4">{place.full}</p>

                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-x-3 lg:gap-x-5 border-t pt-4">
                    <p className="text-sm md:text-md xl:text-lg"><strong>Цена:</strong> {place.price}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Длительность:</strong> {place.duration}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Трансфер:</strong> {place.transfer}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Группа:</strong> {place.group}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Снаряжение:</strong> {place.equipment}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Сложность:</strong> {place.difficulty}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Гид:</strong> {place.guide}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Питание:</strong> {place.food}</p>
                    <p className="text-sm md:text-md xl:text-lg"><strong>Особенности:</strong> {place.special}</p>
                </div>

                <FeedbackCard/>

            </div>
        </>
    );
};

export default PlaceCard;
