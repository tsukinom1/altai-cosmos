const tours = [
        {
            id: 1,
            title: "Тавдинские пещеры, Манжерок",
            shortDescription: "Увлекательное путешествие по красивейшим местам Алтая.",
            fullDescription: "Этот тур познакомит вас с уникальными природными и историческими достопримечательностями Алтая. Вы увидите величественные Тавдинские пещеры, насладитесь потрясающим видом с канатной дороги Манжерока. Опытный гид расскажет вам удивительные истории и легенды этих мест.",
            src: `${import.meta.env.BASE_URL}photos/img-4.jpg`,
            price: "не указана",
            duration: "Нефиксированный",
            transfer: "Toyota Camry",
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
                    image: `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/manzherok-2.jpg`,
                },

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
                `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,

            ]
        },
        {
            id: 2,
            title: "Манжерок: гора Малая Синюха, Золотая Баба, Зубровый питомник",
            shortDescription: "Уникальное путешествие по живописным местам Алтая с захватывающими панорамными видами и встречей с зубрами.",
            fullDescription: "Этот тур проведет вас через удивительные уголки Алтая. Вы подниметесь на гору Малую Синюху, откуда открываются завораживающие виды. Увидите легендарную Золотую Бабу – загадочное святилище алтайских народов. А в Зубровом питомнике сможете понаблюдать за редкими животными в естественной среде обитания. Опытный гид расскажет об истории и традициях этих мест, делая путешествие по-настоящему увлекательным.",
            src: `${import.meta.env.BASE_URL}tours/tour-2.webp`,
            price: "не указана",
            duration: "Нефиксированный",
            transfer: "Toyota Camry",
            group: 'yes',
            equepments: 'yes',
            places: [
                {
                    name: "Манжерок гора Малая Синюха",
                    description: "Живописное место с канатной дорогой и панорамными видами.",
                    image: `${import.meta.env.BASE_URL}tours/manzherok-canat.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,
                },
                {
                    name: "Золотая баба",
                    description: "небольшая фигурка в духе тех, что изготавливали древнейшие народы как символы плодородия и здоровья",
                    image: `${import.meta.env.BASE_URL}tours/golden-baba.jpg`,
                    image2: `${import.meta.env.BASE_URL}tours/golden-baba-2.jpeg`,
                },
                {
                    name: "Зубровый питомник",
                    description: `Kрaснокнижныe зубры – пoтoмки мaмoнтoв, кoтopых вы сможeте не толькo увидeть, нo и пoкopмить.`,
                    image: `${import.meta.env.BASE_URL}tours/zubr-pitomnik.png`,
                    image2: `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.png`,
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
                `${import.meta.env.BASE_URL}tours/manzherok-canat.jpg`,
                `${import.meta.env.BASE_URL}tours/manzherok-canat-2.jpg`,
                `${import.meta.env.BASE_URL}tours/golden-baba.jpg`,
                `${import.meta.env.BASE_URL}tours/golden-baba-2.jpeg`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik.png`,
                `${import.meta.env.BASE_URL}tours/zubr-pitomnik-2.png`
            ]
        },

    ]
;

export default tours;
