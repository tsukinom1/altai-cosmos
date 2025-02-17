import {FaTelegram, FaWhatsapp} from "react-icons/fa";

const Guide = () => {
    return (
        <section className="container mx-auto w-9/10 md:w-3/4 p-2 my-3 md:p-6">
            <h2 className="text-lg md:text-4xl font-bold text-center my-2">Коротко о себе:</h2>
            <div className="md:px-10 mx-auto flex flex-col md:flex-row items-center">

                <img
                    src={`${import.meta.env.BASE_URL}photos/IMG_3917.jpg`}
                    alt="Ваше изображение"
                    className="w-60 h-60 md:w-full md:h-100 border-4 rounded-3xl border-gray-300"
                />
                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Ваш гид: Имя Фамилия</h2>
                    <p className="mt-2 text-gray-600">
                        [пример текста]
                        Привет! Я профессиональный гид с 10-летним опытом путешествий по Алтаю.
                        Провожу индивидуальные и групповые туры, рассказываю удивительные истории о местах силы и
                        показываю лучшие маршруты.
                    </p>
                    <div className="flex gap-5 my-3">
                        <a
                            href="https://wa.me/+79284590455"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            <FaWhatsapp size={20}/>
                            <span>Связаться</span>
                        </a>
                        <a
                            href="https://t.me/altaykosmos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            <FaTelegram size={20}/>
                            <span>Связаться</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guide;
