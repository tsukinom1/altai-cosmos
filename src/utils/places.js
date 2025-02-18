const places = [
    {
        id: 1,
        urlName: "paseka",
        name: "Пасека",
        short: "Дегустация меда и экскурсия.",
        full: "Посещение пасеки с возможностью дегустации свежего меда. Гости узнают о процессе пчеловодства, попробуют разные виды меда и смогут приобрести натуральные продукты.",
        img: `${import.meta.env.BASE_URL}tours/paseka.jpg`,
        price: "3 000 ₽",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Легкий",
        guide: "Да",
        food: "Медовая дегустация",
        special: "Возможность приобрести натуральные продукты"
    },
    {
        id: 2,
        urlName: "zubrovyi-pitomnik",
        name: "Зубровый питомник",
        short: "Встреча с редкими зубрами.",
        full: "Питомник, где можно увидеть редких зубров, покормить их и узнать об их жизни в естественных условиях. Экскурсия с гидом, наблюдение за животными и прогулка по территории.",
        img: `${import.meta.env.BASE_URL}tours/zubr-pitomnik.png`,
        price: "3 000 ₽",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Легкий",
        guide: "Да",
        food: "Нет",
        special: "Возможность покормить зубров"
    },
    {
        id: 3,
        urlName: "husky-pereval",
        name: "Хаски Перевал",
        short: "Катание на собачьих упряжках.",
        full: "Захватывающее путешествие на собачьих упряжках среди снежных просторов. Гости смогут познакомиться с хаски, пообщаться с каюрами и прокатиться по живописному маршруту.",
        img: `${import.meta.env.BASE_URL}tours/haski.jpg`,
        price: "5 000 ₽",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Теплая одежда",
        difficulty: "Средний",
        guide: "Да",
        food: "Горячий чай",
        special: "Возможность общения с собаками"
    },
    {
        id: 4,
        urlName: "seminsky-pereval",
        name: "Семинский перевал",
        short: "Высота 1717 м.",
        full: "Один из самых высоких перевалов на Чуйском тракте. Панорамные виды на горы, альпийские луга и возможность сделать незабываемые фотографии.",
        img: `${import.meta.env.BASE_URL}tours/semenski-pereval.jpg`,
        price: "20 000",
        duration: "Нефиксированный",
        transfer: "Toyota Camry. В стоимость входит трансфер с отеля и обратно",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Средний",
        guide: "Да",
        food: "Нет",
        special: "Прекрасные виды на горы"
    },
    {
        id: 5,
        urlName: "anokhin-museum",
        name: "Национальный музей Анохина",
        short: "История и культура Алтая.",
        full: "Один из крупнейших музеев Алтая, посвященный истории, культуре и археологическим находкам региона. Здесь представлены уникальные артефакты, включая знаменитую мумию 'Алтайская принцесса'.",
        img: `${import.meta.env.BASE_URL}tours/museum.jpg`,
        price: "5 000 ₽",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Легкий",
        guide: "Да",
        food: "Нет",
        special: "Экспозиция о древних культурах Алтая"
    },
    {
        id: 6,
        urlName: "chike-taman",
        name: "Перевал Чике-Таман",
        short: "Живописный перевал 1295 м.",
        full: "Популярная смотровая площадка на Чуйском тракте с захватывающими видами на горные хребты и серпантинные дороги.",
        img: `${import.meta.env.BASE_URL}tours/chike-taman-pereval.jpg`,
        price: "20 000",
        duration: "Нефиксированный",
        transfer: "Toyota Camry. В стоимость входит трансфер с отеля и обратно",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Легкий",
        guide: "Да",
        food: "Нет",
        special: "Отличное место для фотографий"
    },
    {
        id: 7,
        urlName: "golden-baba",
        name: "Золотая баба",
        short: "Древний алтайский культовый объект.",
        full: "Священное место, связанное с мифами и легендами Алтая. Согласно преданиям, здесь хранилось золотое изображение богини.",
        img: `${import.meta.env.BASE_URL}tours/golden-baba.jpg`,
        price: "Не указана",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Средний",
        guide: "Да",
        food: "Нет",
        special: "Место с историческим значением"
    },
    {
        id: 8,
        urlName: "patmos-church",
        name: "Храм апостола Иоанна Богослова",
        short: "Храм на острове Патмос.",
        full: "Уникальный деревянный храм, расположенный на живописном острове. Доступен только по подвесному мосту.",
        img: `${import.meta.env.BASE_URL}tours/hram-apostola.jpg`,
        price: "Не указана",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Нет, не требуется",
        difficulty: "Легкий",
        guide: "Да",
        food: "Нет",
        special: "Подвесной мост и живописные виды"
    },
    {
        id: 9,
        urlName: "waterfall",
        name: "Водопад",
        short: "Захватывающие водопады Алтая.",
        full: "Посещение одного из красивейших водопадов региона. Возможность насладиться шумом воды и сделать незабываемые снимки.",
        img: `${import.meta.env.BASE_URL}tours/waterfall.jpg`,
        price: "5 000 ₽",
        duration: "Нефиксированный",
        transfer: "Toyota Camry. В стоимость входит катер до водопада и обратно",
        group: "До 4 людей",
        equipment: "Одежда по погоде",
        difficulty: "Средний",
        guide: "Да",
        food: "Нет",
        special: "Живописные виды и чистейшая вода"
    },
    {
        id: 10,
        urlName: "atv-extreme",
        name: "Квадроциклы Экстрим",
        short: "Экстремальные поездки по бездорожью.",
        full: "Катание на мощных квадроциклах по живописным горным маршрутам с возможностью преодоления бродов и сложных участков.",
        img: `${import.meta.env.BASE_URL}tours/cvadrocicle.webp`,
        price: "Не указана",
        duration: "Нефиксированный",
        transfer: "Toyota Camry",
        group: "До 4 людей",
        equipment: "Шлем, защитная одежда",
        difficulty: "Сложный",
        guide: "Да",
        food: "Перекус",
        special: "Адреналин и скорость"
    }
];

export default places;
