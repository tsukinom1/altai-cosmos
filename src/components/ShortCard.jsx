import { Link } from "react-router-dom";

const ShortCard = ({ className, id, src, title, shortDescription }) => {
    return (
        <div className={`flex flex-col md:flex-row md:items-center gap-5 bg-white shadow-lg rounded-2xl overflow-hidden my-10 ${className}`}>
            <img src={src} alt={title} className="w-full block mx-auto md:mx-0 md:w-1/2 h-60 md:h-100 object-cover rounded-lg" />
            <div className="md:p-6 flex flex-col md:justify-center text-center md:text-left">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-600 mt-2">{shortDescription}</p>
                <Link to={`/tour/id/${id}`} className="mt-4 sm:w-1/3  bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300">
                    Подробнее
                </Link>
            </div>
        </div>
    );
};

export default ShortCard;
