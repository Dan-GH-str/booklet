import addr from "../../../content/addresses/addressesRU"
import { soups, main, hot, salads, desserts, drinks } from "./categories/categoriesRU.js"

const restaurants = [
    {
        id: 0, 
        name: "Наffига козе баян?!", 
        addr: `${addr.NKB}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 2, title: "Серые щи из крошева", description: "Наваристые щи из крошева по-старорусски со свининой." },
                { id: 4, title: "Ильменская уха", description: "Судак, лосось, картофель, сливки, грибы, лук." }
            ],

            [main]: [
                { id: 0, title: "Ужин рыбака", description: "Щука по-новгородски с обжаренным картофелем и соусом тар-тар." },
                { id: 1, title: "Судак ильменский", description: "Ильменский судак с овощным рататуем." },
                { id: 3, title: "Телячьи щечки", description: "Телячьи щёчки со злаками и свекольным кремом." },
                { id: 7, title: "«Дед Мазай»", description: "Пряный заяц с молодым картофелем, тройным соусом (сливочно-шоколадно-мясной)." },
            ],

            [salads]: [
                { id: 5, title: "Салат «Коза-дереза»", description: "Яркий и легкий, из 2-х видов салатных листьев, обжаренных креветок, томатов Черри, сыра cremette и заправкой из натурального йогурта." },
                { id: 6, title: "Салат «Летят утки»", description: "Оливье с уткой. Утка, яблоко, картофель, морковка, огурец, домашний майонез." },
            ],

            [desserts]: [
                { id: 8, title: "Новгородская вафля", description: "Новгородская вафля подаётся с кисло-сладкими мандаринами и шоколадным мороженым." },
            ],

            [drinks]: [
                { id: 12, title: "Княгиня Ольга", description: "Бехеровка, ванильный сироп, лимонный фреш, пюре малины." },
                { id: 9, title: "Медовуха тёмная", description: "" },
                { id: 10, title: "Иван Царевич эль", description: "" },
                { id: 11, title: "Кикимора молочный стаут", description: "" },
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
            [soups]: [{ id: 1, title: "Традиционные серые щи с жареным бородинским хлебом", description: "" }],
            
            [main]: [{ id: 2, title: "Щека теленка с картофельным пюре", description: "" }],

            [salads]: [{ id: 0, title: "Салат с ильменским судаком", description: "" }],

            [hot]: [{ id: 3, title: "Пирог с говяжьей щекой и пряным бульоном", description: "" }]
        }
    },
    {
        id: 2, 
        name: "Дом Берга", 
        addr: `${addr.Berga}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Aa456833f516c39a0de48b4bec0dcb3484d4f8d09923cceb16494b503e8dbb6fb&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A81297a56e54b48e0258af1b970c68deae0aa5ec61287f502880bfc6b391fd07a&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 0, title: "Серые щи из крошева с зелёных листов капусты", description: "" },
                { id: 1, title: "Суп с белыми грибами из новгородских лесов, приготовленный по старинному рецепту. ", description: "" }
            ],

            [main]: [
                { id: 2, title: "Медвежатина", description: "" },
                { id: 3, title: "Котлеты из щуки и картофеля", description: "" },
                { id: 4, title: "Ильменьский паровой судак с овощами", description: "" },
                { id: 5, title: "Телячьи щечки с перловой кашей и аджикой из свеклы", description: "" }
            ],

            [drinks]: [
                { id: 7, title: "Сбитень", description: "Старинный русский горячий напиток, сваренный из мёда, пряностей и трав." },
                { id: 6, title: "Медовуха", description: "" }
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
                { id: 2, title: "Серые щи", description: "" }
            ],

            [hot]: [
                { id: 3, title: "Румаки", description: "" }
            ],

            [salads]: [
                { id: 1, title: "Салат рыбака", description: "Отварной картофель, зеленый лук, соленый огурец, судак домашнео копчения" }
            ],

            [desserts]: [
                { id: 0, title: "Пряник «Заводской»", description: "с начинкой из сухофруктов на Спотыкаче" }
            ],

            [drinks]: [
                { id: 4, title: "Морошка", description: "Морошка не похожа ни на какую другую ягоду, так как природа наделила её балансом из сладкого, кислого и горького оттенков вкуса.ыражаясь языком профессионалов, это настойка с пониженным содержанием алкоголя (low ABV), а коктейль из ингредиентов в её составе даёт ощущение мёда и сот в послевкусии." },
                { id: 5, title: "Хреновуха", description: "Первосортный ароматный хрен, шесть видов пикантных перцев, чеснок, натуральный мёд и длительноу настаивание." }
            ]
        }
    },
    {
        id: 4, 
        name: "Чародейка", 
        addr: `${addr.Charodeyka}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Acd40d7b08c1c5bea6154e0b5d9d68fd25be809ec667cbd313eef9bf7bbd3462d&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 2, title: "Серые щи", description: "" }
            ],

            [main]: [
                { id: 0, title: "Дикий судак с соусом из печёного перца", description: "" },
                { id: 1, title: "Скоблянка из судака с лесными грибами", description: "" },
                { id: 4, title: "Телячьи щёчки с картофельным пюре", description: "" }
            ],

            [hot]: [
                { id: 3, title: "Румаки", description: "" },
                { id: 5, title: "Сульчины", description: "Блины с творогом." }
            ],

            [drinks]: [
                { id: 6, title: "Водка Спасская", description: "" },
                { id: 7, title: "Водка Садко", description: "" },
                { id: 8, title: "Спотыкач", description: "" }
            ]
        }
    },
    {
        id: 5, 
        name: "Юрьевское Подворье", 
        addr: `${addr.Yuryevsky}`, 
        href: "https://yandex.ru/maps/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&amp;source=constructorStatic",
        src: "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ad3aa3c7665a1f5ad2c96eb35a6411c5cf8366d870185b93ceb3574c94f6cfcd3&width=350&height=450&lang=ru_RU",
        content: {
            [soups]: [
                { id: 0, title: "Традиционные Новгородские щи из крошева", description: "Новгородские щи из крошева с мясом поросенка и растушенным картофелем." },
                { id: 2, title: "Уха с судаком и щукой", description: "Классическая уха с судаком и щукой из озера «Ильмень» с отварным картофелем и морковью." }
            ],

            [main]: [
                { id: 1, title: "Судак холодного копчения с муссом из бородинского хлеба и злаковыми чипсами", description: "Филе подкопченого судака, мусс из бородинского хлеба и кариандра со злаковыми чипсами, томатным и укропным маслом." },
                { id: 3, title: "Ильменский судак печеный в капусте с соусом из яблок", description: "Судак с кремом из яблок с картофелем." },
                { id: 4, title: "Котлеты из щуки в сливочно-икорном соусе", description: "Нежные котлеты из филе щуки с пюре и сливочным соусом." }
            ]    
        }
    },
]

export default restaurants