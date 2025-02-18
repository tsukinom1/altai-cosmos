import {useState, useEffect} from "react";
import {motion} from "framer-motion";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: `${import.meta.env.BASE_URL}images/bg-1.jpg`,
            text: "Откройте для себя величественные горы Алтая!",
        },
        {
            image: `${import.meta.env.BASE_URL}images/bg-3.jpg`,
            text: "Путешествуйте с комфортом и восхищением!",
        },
        {
            image: `${import.meta.env.BASE_URL}images/bg-2.jpg`,
            text: "Незабываемые приключения ждут вас!",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="relative w-full h-[80vh]  overflow-hidden">
            <div className="container mx-auto w-9/10 md:w-3/4 p-6 pt-3">
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0}}
                        animate={{opacity: index === currentSlide ? 1 : 0}}
                        transition={{duration: 1}}
                        className="absolute inset-0 bg-cover"
                        style={{backgroundImage: `url(${slide.image})`}}
                    />
                ))}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center max-w-3xl tracking-wide leading-tight font-serif drop-shadow-lg">
                        {slides[currentSlide].text}
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;