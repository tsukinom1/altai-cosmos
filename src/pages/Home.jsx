import ShortCard from "../components/ShortCard";
import tours from "../utils/tours.js";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Feedback from "../components/Feedback.jsx";
import feedbacks from "../utils/feedbacks.js";
import FeedbackCard from "../components/FeedbackCard.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <h1>Здесь думаю над тем, чтобы добавить блок о вас: кто вы и тд чтобы у клиентов было предоставление</h1>
            <div className="">
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
            </div>
            <Feedback feedbacks={feedbacks} />
            <h1>Хочу сделать галерею на главной странице, но пока не решил каким хочу видеть и где: до отзывов или после </h1>
            <FeedbackCard />
        </div>
    );
};

export default Home;
