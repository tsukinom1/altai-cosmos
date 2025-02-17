import {FaWhatsapp, FaTelegram} from "react-icons/fa";

const FeedbackCard = ({}) => {
    return (
        <div className="container mx-auto w-9/10 md:w-3/4 p-2 md:p-6 shadow-lg rounded-lg">
            <div className="w-full md:w-2/3 mx-auto text-center p-3">
                <h2 className="text-lg font-semibold mb-1">Свяжитесь с нами</h2>
                <p className="text-gray-600 mb-4">Если у вас есть вопросы, напишите нам в мессенджерах.</p>
                <div className="flex space-x-4 justify-center">
                    <a
                        href="https://wa.me/+79284590455"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        <FaWhatsapp size={20}/>
                        <span>WhatsApp</span>
                    </a>
                    <a
                        href="https://t.me/altaykosmos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform duration-500 flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <FaTelegram size={20}/>
                        <span>Telegram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
