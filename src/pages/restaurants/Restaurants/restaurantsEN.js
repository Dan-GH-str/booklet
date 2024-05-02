import addr from "../../../content/addresses/addressesEN"
import { soups, main, hot, salads, desserts } from "./categories/categoriesEN.js"

const restaurants = [
    {
        id: 0, 
        name: "Naffiga koza bayan?!", 
        addr: `${addr.NKB}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 2, title: "Crumbled gray cabbage soup", description: "Steeped in Old Russian-style krosheva shields with pork." },
                { id: 4, title: "Ilmenskaya ukha", description: "Sudak, salmon, potatoes, cream, mushrooms, onions." }
            ],

            [main]: [
                { id: 0, title: "Fisherman's dinner", description: "Novgorod-style pike with roasted potatoes and tartar sauce." },
                { id: 1, title: "Sudak ilmensky", description: "Ilmensky pikeperch with vegetable ratatouille." },
                { id: 3, title: "Veal cheeks", description: "Veal cheeks with cereal and beet cream." },
                { id: 7, title: "«Grandfather Mazai»", description: "Spicy hare with young potatoes, triple sauce (creamy-chocolate-meat)." },
            ],

            [salads]: [
                { id: 5, title: "Salad «Koza-dereza»", description: "Bright and light, made with 2 types of salad leaves, roasted shrimp, cherry tomatoes, cremette cheese and natural yogurt dressing." },
                { id: 6, title: "Salad «Ducks are flying»", description: "Olivier with duck. Duck, apple, potatoes, carrots, cucumber, homemade mayonnaise." },
            ],

            [desserts]: [
                { id: 8, title: "Novgorod waffle", description: "Novgorod waffle served with sweet and sour mandarins and chocolate ice cream." },
            ]
        }
    },
    {
        id: 1, 
        name: "Marusya", 
        addr: `${addr.Marusya}`, 
        href: "https://yandex.ru/maps/?um=constructor%3A566b0fed003df249f82f96460419307d0b48ac52de40d0fffc795d4a22fda38e&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A566b0fed003df249f82f96460419307d0b48ac52de40d0fffc795d4a22fda38e&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [{ id: 1, title: "Traditional gray shchi with fried borodino bread", description: "" }],
            
            [main]: [{ id: 2, title: "Veal cheek with mashed potatoes", description: "" }],

            [salads]: [{ id: 0, title: "Salad with Ilmen pikeperch", description: "" }],

            [hot]: [{ id: 3, title: "Beef cheek pie with spicy broth.", description: "" }]
        }
    },
    {
        id: 2, 
        name: "Berg's House",
        addr: `${addr.Berga}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A81297a56e54b48e0258af1b970c68deae0aa5ec61287f502880bfc6b391fd07a&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 0, title: "Crumbled gray cabbage soup with green cabbage leaves", description: "" },
                { id: 1, title: "Soup with porcini mushrooms from the forests of Novgorod, cooked according to an ancient recipe", description: "" },
            ],

            [main]: [
                { id: 2, title: "Bear meat", description: "" },
                { id: 3, title: "Pike and potato cutlets", description: "" },
                { id: 4, title: "Ilmensky steamed pikeperch with vegetables", description: "" },
                { id: 5, title: "Veal cheeks with pearl porridge and beet adjika", description: "" }
            ]
        }
    },
    {
        id: 3, 
        name: "Zavod", 
        addr: `${addr.Zavod}`, 
        href: "https://yandex.ru/maps/?um=constructor%3A099377b84cf6ac058baeb53837eef87af2090f58c544ffcd9d50f5e850db9f84&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A099377b84cf6ac058baeb53837eef87af2090f58c544ffcd9d50f5e850db9f84&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 2, title: "The grey shchi", description: "" },
            ],

            [hot]: [
                { id: 3, title: "Rumaki", description: "" }
            ],

            [salads]: [
                { id: 1, title: "Fisherman's salad", description: "Boiled potatoes, green onions, pickled cucumber, home-smoked pikeperch." },
            ],

            [desserts]: [
                { id: 0, title: "Gingerbread «Zavodskoy»", description: "with dried fruit stuffing on Spotykatch." },
            ]

        }
    },
    {
        id: 4, 
        name: "Charodeika",
        addr: `${addr.Charodeyka}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 2, title: "The grey shchi", description: "" },
            ],

            [main]: [
                { id: 0, title: "Wild pikeperch with roasted pepper sauce", description: "" },
                { id: 1, title: "Skoblyanka of pikeperch with wild mushrooms", description: "" },
                { id: 4, title: "Veal cheeks with mashed potatoes", description: "" },
            ],

            [hot]: [
                { id: 3, title: "Rumaki", description: "" },
                { id: 5, title: "Sulchiny", description: "Pancakes with cottage cheese" }
            ]
        }
    },
    {
        id: 5, 
        name: "Yurievsky Farmstead",
        addr: `${addr.Yuryevsky}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 0, title: "Traditional Novgorod Shchi from crumbles", description: "Novgorod soup made of crumble with pig meat and grown potatoes." },
                { id: 2, title: "Soup with zander and pike", description: "Classic soup with pikeperch and zander from lake «Ilmen» with boiled potatoes and carrots." },
            ],

            [main]: [
                { id: 1, title: "Cold smoked pikeperch with mousse of borodino bread and cereal chips", description: "Fillet of smoked pikeperch, mousse of borodine bread and cariander with cereal chips, tomato and dill oil." },
                { id: 3, title: "Ilmensky pikeperch baked in cabbage with apple sauce", description: "Vessel with apple cream with potatoes." },
                { id: 4, title: "Pike cutlets in cream and bark sauce", description: "Tender pike fillet cutlets with mashed potatoes and cream sauce." }
            ]    
        }
    },










    // {
    //     id: 0, 
    //     name: "Naffiga koza bayan?!", 
    //     addr: `${addr.NKB}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&width=350&height=450&lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Fisherman's dinner", description: "Novgorod-style pike with roasted potatoes and tartar sauce." },
    //         { id: 1, title: "Sudak ilmensky", description: "Ilmensky pikeperch with vegetable ratatouille." },
    //         { id: 2, title: "Crumbled gray cabbage soup", description: "Steeped in Old Russian-style krosheva shields with pork." },
    //         { id: 3, title: "Veal cheeks", description: "Veal cheeks with cereal and beet cream." },
    //         { id: 4, title: "Ilmenskaya ukha", description: "Sudak, salmon, potatoes, cream, mushrooms, onions." },
    //         { id: 5, title: "Salad «Koza-dereza»", description: "Bright and light, made with 2 types of salad leaves, roasted shrimp, cherry tomatoes, cremette cheese and natural yogurt dressing." },
    //         { id: 6, title: "Salad «Ducks are flying»", description: "Olivier with duck. Duck, apple, potatoes, carrots, cucumber, homemade mayonnaise." },
    //         { id: 7, title: "«Grandfather Mazai»", description: "Spicy hare with young potatoes, triple sauce (creamy-chocolate-meat)." },
    //         { id: 8, title: "Novgorod waffle", description: "Novgorod waffle served with sweet and sour mandarins and chocolate ice cream." },
    //     ]
    // },
    // {
    //     id: 1, 
    //     name: "Marusya", 
    //     addr: `${addr.Marusya}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3A566b0fed003df249f82f96460419307d0b48ac52de40d0fffc795d4a22fda38e&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A566b0fed003df249f82f96460419307d0b48ac52de40d0fffc795d4a22fda38e&width=350&height=450&lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Salad with Ilmen pikeperch", description: "" },
    //         { id: 1, title: "Traditional gray shchi with fried borodino bread", description: "" },
    //         { id: 2, title: "Veal cheek with mashed potatoes", description: "" },
    //         { id: 3, title: "Beef cheek pie with spicy broth.", description: "" }
    //     ]
    // },
    // {
    //     id: 2, 
    //     name: "Berg's House", 
    //     addr: `${addr.Berga}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A81297a56e54b48e0258af1b970c68deae0aa5ec61287f502880bfc6b391fd07a&amp;width=350&amp;height=450&amp;lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Crumbled gray cabbage soup with green cabbage leaves", description: "" },
    //         { id: 1, title: "Soup with porcini mushrooms from the forests of Novgorod, cooked according to an ancient recipe", description: "" },
    //         { id: 2, title: "Bear meat", description: "" },
    //         { id: 3, title: "Pike and potato cutlets", description: "" },
    //         { id: 4, title: "Ilmensky steamed pikeperch with vegetables", description: "" },
    //         { id: 5, title: "Veal cheeks with pearl porridge and beet adjika", description: "" }
    //     ]
    // },
    // {
    //     id: 3, 
    //     name: "Zavod", 
    //     addr: `${addr.Zavod}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3A099377b84cf6ac058baeb53837eef87af2090f58c544ffcd9d50f5e850db9f84&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A099377b84cf6ac058baeb53837eef87af2090f58c544ffcd9d50f5e850db9f84&amp;width=350&height=450&lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Gingerbread «Zavodskoy»", description: "with dried fruit stuffing on Spotykatch." },
    //         { id: 1, title: "Fisherman's salad", description: "Boiled potatoes, green onions, pickled cucumber, home-smoked pikeperch." },
    //         { id: 2, title: "The grey shchi", description: "" },
    //         { id: 3, title: "Rumaki", description: "" }
    //     ]
    // },
    // {
    //     id: 4, 
    //     name: "Charodeika", 
    //     addr: `${addr.Charodeyka}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&amp;width=350&amp;height=450&amp;lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Wild pikeperch with roasted pepper sauce", description: "" },
    //         { id: 1, title: "Skoblyanka of pikeperch with wild mushrooms", description: "" },
    //         { id: 2, title: "The grey shchi", description: "" },
    //         { id: 3, title: "Rumaki", description: "" },
    //         { id: 4, title: "Veal cheeks with mashed potatoes", description: "" },
    //         { id: 5, title: "Sulchiny", description: "Pancakes with cottage cheese" }
    //     ]
    // },
    // {
    //     id: 5, 
    //     name: "Yurievsky Farmstead", 
    //     addr: `${addr.Yuryevsky}`, 
    //     href: "https://yandex.ru/maps/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&amp;source=constructorStatic",
    //     src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&amp;width=350&amp;height=450&amp;lang=ru_RU",
    //     content: [
    //         { id: 0, title: "Traditional Novgorod Shchi from crumbles", description: "Novgorod soup made of crumble with pig meat and grown potatoes." },
    //         { id: 1, title: "Cold smoked pikeperch with mousse of borodino bread and cereal chips", description: "Fillet of smoked pikeperch, mousse of borodine bread and cariander with cereal chips, tomato and dill oil." },
    //         { id: 2, title: "Soup with zander and pike", description: "Classic soup with pikeperch and zander from lake «Ilmen» with boiled potatoes and carrots." },
    //         { id: 3, title: "Ilmensky pikeperch baked in cabbage with apple sauce", description: "Vessel with apple cream with potatoes." },
    //         { id: 4, title: "Pike cutlets in cream and bark sauce", description: "Tender pike fillet cutlets with mashed potatoes and cream sauce." }
    //     ]
    // },
]

export default restaurants