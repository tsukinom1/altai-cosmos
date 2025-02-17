import {useState} from "react";


const FAQ = ({faqs}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto w-9/10 md:w-3/4 py-1 px-2 md:px-6 ">
            <div className="md:w-3/4 mx-auto my-3">
                <h2 className="text-lg md:text-2xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <button
                                className="w-full text-left p-2 md:p-4 flex justify-between items-center text-lg font-medium hover:bg-gray-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t bg-gray-50">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
