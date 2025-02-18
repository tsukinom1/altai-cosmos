import {FaLanguage, FaMoneyBillWave, FaQuestionCircle, FaUndo, FaUserFriends} from "react-icons/fa";

const iconMap = {
    FaUserFriends: FaUserFriends,
    FaLanguage: FaLanguage,
    FaMoneyBillWave: FaMoneyBillWave,
    FaUndo: FaUndo,
};

const Conditions = ({conditions}) => {
    return (
        <div data-aos="zoom-in-out" data-aos-duration="1000">
            <h2 className="font-bold text-md md:text-lg">Условия поездки:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                {conditions.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                        <div key={index} className="flex items-start space-x-3 my-2">
                            {IconComponent && <IconComponent className="text-xl text-gray-700"/>}
                            <div>
                                <p className="font-medium text-md text-gray-900">{item.title}</p>
                                {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Conditions;
