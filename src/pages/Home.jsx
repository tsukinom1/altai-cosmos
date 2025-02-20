import ShortCard from "../components/ShortCard";
import tours from "../utils/tours.js";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Feedback from "../components/Feedback.jsx";
import feedbacks from "../utils/feedbacks.js";
import FeedbackCard from "../components/FeedbackCard.jsx";
import {Link} from "react-router-dom";
import GallerySwiper from "../components/GallerySwiper.jsx";
import React from "react";
import Alert from "../components/Alert.jsx";
import ProductCard from "../components/ProductCard.jsx";
import GuideCard from "../components/GuideCard.jsx";


const Home = () => {
    return (
        <div className="">
            <Header/>
            <HeroSection/>
            <GuideCard guide={{
                photo1: `${import.meta.env.BASE_URL}images/guide-1.jpg`,
                photo2: `${import.meta.env.BASE_URL}images/guide-2.jpg`,
                name: "Алина",
                description: "Индивидуальные туры Алтай.",
                description2: "Незабываемые путешествия по живописным местам.",
                description3: "Связаться со мной",
            }}/>
            <Alert text="Популярные туры"/>
            <div className="container mx-auto w-9/10 md:w-3/4 p-2 my-3 md:p-6">
                {tours.map((tour) => (
                    <ShortCard
                        key={tour.id}
                        className={tour.id % 2 === 0 ? "md:flex-row-reverse" : ""}
                        dataAos={tour.id % 2 === 0 ? "fade-right" : "fade-left"}
                        id={tour.id}
                        src={tour.src}
                        title={tour.title}
                        shortDescription={tour.shortDescription}
                    />
                ))}
                <Link to="/tours"
                      className="animate-bounce block mx-auto my-5 w-fit text-center bg-green-600 hover:bg-green-400 text-white py-3 px-4 rounded-lg transition duration-300">
                    Посмотреть все локации
                </Link>
            </div>
            <Feedback feedbacks={feedbacks}/>
            <ProductCard/>
            <GallerySwiper/>
            <FeedbackCard id="feedbackCard"/>
        </div>
    );
};

export default Home;
