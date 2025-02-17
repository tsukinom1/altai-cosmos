
const tours = [
        {
            id: 1,
            title: "Тавдинские пещеры, Манжерок, Зубровый питомник",
            shortDescription: "Увлекательное путешествие по красивейшим местам Алтая.",
            fullDescription: "Этот тур познакомит вас с уникальными природными и историческими достопримечательностями Алтая. Вы увидите величественные Тавдинские пещеры, насладитесь потрясающим видом с канатной дороги Манжерока и встретите редких зубров в питомнике. Опытный гид расскажет вам удивительные истории и легенды этих мест.",
            src: `${import.meta.env.BASE_URL}photos/IMG_2837.jpg`,
            price: "7500 ₽",
            duration: "3-4 часа",
            transfer: "Возможен",
            group: 'yes',
            equepments: 'yes',
            places: [
                {
                    name: "Тавдинские пещеры",
                    description: "Пещеры с древними наскальными рисунками.",
                    image: `${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                    image2: `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,
                },
                {
                    name: "Манжерок",
                    description: "Канатная дорога с потрясающим видом на Алтай.",
                    image: `${import.meta.env.BASE_URL}tours/manzherok.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/manzherok-2.jpg`,
                },
                {
                    name: "Зубровый питомник",
                    description: `Kрaснокнижныe зубры – пoтoмки мaмoнтoв, кoтopых вы сможeте не толькo увидeть, нo и пoкopмить.`,
                    image: `${import.meta.env.BASE_URL}tours/zubr-pitomnik.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.webp`,
                }
            ],
            conditions: [
                {
                    icon: "FaUserFriends",
                    title: "Индивидуальный формат",
                    description: "Только для вас и вашей компании, 1–4 человека"
                },
                {
                    icon: "FaLanguage",
                    title: "Проходит на русском языке",
                    description: ""
                },
                {
                    icon: "FaMoneyBillWave",
                    title: "Предоплата 25%",
                    description: "Остальное — на месте"
                },
                {
                    icon: "FaUndo",
                    title: "Бесплатная отмена",
                    description: "За 48 часов"
                },
            ],
            gallery: [
                `${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok-2.jpg`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik.jpg`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.webp`,

            ]
        },
        {
            id: 2,
            title: "Лохматая ферма, Манжерок, Рынок Горного Алтая, Пасека",
            shortDescription: "Незабываемое путешествие по удивительным местам Алтая.",
            fullDescription: "Этот тур познакомит вас с традициями и природными красотами Алтая. Вы посетите уютную 'Лохматую ферму', увидите потрясающие виды с Малой Синюхи, попробуете свежий мёд на пасеке и прогуляетесь по колоритному рынку Горного Алтая. Опытный гид расскажет вам об истории этих мест и местных обычаях.",
            src: `${import.meta.env.BASE_URL}tours/tour-2.webp`,
            price: "6800 ₽",
            duration: "3-4 часа",
            transfer: "Возможен",
            group: 'yes',
            equepments: 'yes',
            places: [
                {
                    name: "Лохматая ферма",
                    description: "Ферма, где можно пообщаться с животными и попробовать свежие фермерские продукты.",
                    image: `${import.meta.env.BASE_URL}tours/lohmataya.png`,
                    image2: `${import.meta.env.BASE_URL}tours/lohmataya-2.png`,
                },
                {
                    name: "Манжерок (Малая Синюха)",
                    description: "Живописное место с канатной дорогой и панорамными видами.",
                    image: `${import.meta.env.BASE_URL}tours/manzherok-canat.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,
                },
                {
                    name: "Рынок Горного Алтая",
                    description: "Место, где можно купить сувениры, местные травы, мед и изделия алтайских мастеров.",
                    image: `${import.meta.env.BASE_URL}tours/rynok.jpeg`,
                    image2: `${import.meta.env.BASE_URL}tours/rynok-2.jpg`,
                },
                {
                    name: "Пасека (дегустация мёда)",
                    description: "Посещение пасеки с дегустацией мёда и рассказом о традициях пчеловодства на Алтае.",
                    image: `${import.meta.env.BASE_URL}tours/paseka.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/paseka-2.jpeg`,
                }
            ],
            conditions: [
                {
                    icon: "FaUserFriends",
                    title: "Индивидуальный формат",
                    description: "Только для вас и вашей компании, 1–4 человека"
                },
                {
                    icon: "FaLanguage",
                    title: "Проходит на русском языке",
                    description: ""
                },
                {
                    icon: "FaMoneyBillWave",
                    title: "Предоплата 25%",
                    description: "Остальное — на месте"
                },
                {
                    icon: "FaUndo",
                    title: "Бесплатная отмена",
                    description: "За 48 часов"
                },
                {
                    icon: "FaQuestionCircle",
                    title: "Можно задать вопросы",
                    description: "Организатору до предоплаты"
                }
            ],
            gallery: [
                `${import.meta.env.BASE_URL}tours/lohmataya.png`,
                `${import.meta.env.BASE_URL}tours/lohmataya-2.png`,
                `${import.meta.env.BASE_URL}tours/manzherok-canat.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,
                `${import.meta.env.BASE_URL}tours/rynok.jpeg`,
                `${import.meta.env.BASE_URL}tours/rynok-2.jpg`,
                `${import.meta.env.BASE_URL}tours/paseka.jpg`,
                `${import.meta.env.BASE_URL}tours/paseka-2.jpeg`
            ]
        },
        {
            id: 3,
            title: "Тавдинские пещеры, Манжерок, Зубровый питомник",
            shortDescription: "Увлекательное путешествие по красивейшим местам Алтая.",
            fullDescription: "Этот тур познакомит вас с уникальными природными и историческими достопримечательностями Алтая. Вы увидите величественные Тавдинские пещеры, насладитесь потрясающим видом с канатной дороги Манжерока и встретите редких зубров в питомнике. Опытный гид расскажет вам удивительные истории и легенды этих мест.",
            src: `${import.meta.env.BASE_URL}photos/IMG_2841.jpg`,
            price: "7500 ₽",
            duration: "3-4 часа",
            transfer: "Возможен",
            group: 'yes',
            equepments: 'yes',
            places: [
                {
                    name: "Тавдинские пещеры",
                    description: "Пещеры с древними наскальными рисунками.",
                    image: `${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                    image2: `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,
                },
                {
                    name: "Манжерок",
                    description: "Канатная дорога с потрясающим видом на Алтай.",
                    image: `${import.meta.env.BASE_URL}tours/manzherok.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/manzherok-2.jpg`,
                },
                {
                    name: "Зубровый питомник",
                    description: `Kрaснокнижныe зубры – пoтoмки мaмoнтoв, кoтopых вы сможeте не толькo увидeть, нo и пoкopмить.`,
                    image: `${import.meta.env.BASE_URL}tours/zubr-pitomnik.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.webp`,
                }
            ],
            conditions: [
                {
                    icon: "FaUserFriends",
                    title: "Индивидуальный формат",
                    description: "Только для вас и вашей компании, 1–4 человека"
                },
                {
                    icon: "FaLanguage",
                    title: "Проходит на русском языке",
                    description: ""
                },
                {
                    icon: "FaMoneyBillWave",
                    title: "Предоплата 25%",
                    description: "Остальное — на месте"
                },
                {
                    icon: "FaUndo",
                    title: "Бесплатная отмена",
                    description: "За 48 часов"
                },
            ],
            gallery: [
                `${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok-2.jpg`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik.jpg`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.webp`,

            ]
        },

    ]
;

export default tours;
