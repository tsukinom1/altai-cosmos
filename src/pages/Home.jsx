import ShortCard from "../components/ShortCard";
import tours from "../utils/tours.js";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Feedback from "../components/Feedback.jsx";
import feedbacks from "../utils/feedbacks.js";
import FeedbackCard from "../components/FeedbackCard.jsx";
import FAQ from "../components/FAQ.jsx";
import faqs from "../utils/faq.js";
import {Link} from "react-router-dom";
import Guide from "../components/Guide.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Guide/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-2 my-3 md:p-6">
                <h2 className="text-2xl md:text-4xl font-bold text-center my-5">Популярные туры</h2>
                {tours.map((tour) => (
                    <ShortCard
                        key={tour.id}
                        className={tour.id % 2 === 0 ? "md:flex-row-reverse" : ""}
                        id={tour.id}
                        src={tour.src}
                        title={tour.title}
                        shortDescription={tour.shortDescription}
                    />
                ))}
                <Link to="/tours"
                      className="block mx-auto my-5 w-fit text-center bg-green-600 hover:bg-green-400 text-white py-3 px-4 rounded-lg transition duration-300">
                    Посмотреть все локации
                </Link>
            </div>
            <Feedback feedbacks={feedbacks}/>
            <h1>Хочу сделать галерею на главной странице, но пока не решил каким хочу видеть и где: до отзывов или
                после </h1>
            <FAQ faqs={faqs}/>
            <FeedbackCard/>
        </div>
    )
        ;
};

export default Home;
