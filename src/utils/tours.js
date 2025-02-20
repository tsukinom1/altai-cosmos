const tours = [
        {
            id: 1,
            title: "Тавдинские пещеры",
            shortDescription: "Увлекательное путешествие по красивейшим местам Алтая.",
            fullDescription: "Этот тур познакомит вас с уникальными природными и историческими достопримечательностями Алтая. Вы увидите величественные Тавдинские пещеры, насладитесь потрясающим видом с канатной дороги Манжерока. Опытный гид расскажет вам удивительные истории и легенды этих мест.",
            src: `${import.meta.env.BASE_URL}images/img-4.jpg`,
            price: "не указана",
            duration: "Нефиксированный",
            transfer: "Toyota Camry",
            group: 'yes',
            equipments: 'yes',
            places: [
                {
                    name: "Тавдинские пещеры",
                    description: "Пещеры с древними наскальными рисунками.",
                    image: [`${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                        `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,
                    ]
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
            ],
            gallery: [
                `${import.meta.env.BASE_URL}tours/tavdin-cave.jpeg`,
                `${import.meta.env.BASE_URL}tours/tavdin-cave-2.jpg`,

            ]
        },
        {
            id: 2,
            title: "Манжерок: гора Малая Синюха, Золотая Баба",
            shortDescription: "Уникальное путешествие по живописным местам Алтая с захватывающими панорамными видами",
            fullDescription: "Этот тур проведет вас через удивительные уголки Алтая. Вы подниметесь на гору Малую Синюху, откуда открываются завораживающие виды. Увидите легендарную Золотую Бабу – загадочное святилище алтайских народов.Опытный гид расскажет об истории и традициях этих мест, делая путешествие по-настоящему увлекательным.",
            src: `${import.meta.env.BASE_URL}tours/manzherok-canat-2.png`,
            price: "не указана",
            duration: "Нефиксированный",
            transfer: "Toyota Camry",
            group: 'yes',
            equipments: 'yes',
            places: [
                {
                    name: "Манжерок гора Малая Синюха",
                    description: "Живописное место с канатной дорогой и панорамными видами.",
                    image: [`${import.meta.env.BASE_URL}tours/manzherok-canat-1.png`,
                        `${import.meta.env.BASE_URL}tours/manzherok-canat-2.png`,
                    ]
                },
                {
                    name: "Золотая баба",
                    description: "небольшая фигурка в духе тех, что изготавливали древнейшие народы как символы плодородия и здоровья",
                    image: [
                        `${import.meta.env.BASE_URL}tours/golden-baba.jpg`,
                    ]
                }
                ,
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
                    icon: "FaQuestionCircle",
                    title: "Можно задать вопросы",
                    description: "Организатору до предоплаты"
                }
            ],
            gallery:
                [
                    `${import.meta.env.BASE_URL}tours/manzherok-canat-1.png`,
                    `${import.meta.env.BASE_URL}tours/manzherok-canat-2.png`,
                    `${import.meta.env.BASE_URL}tours/golden-baba.jpg`,
                ]
        },

    ]
;

export default tours;
