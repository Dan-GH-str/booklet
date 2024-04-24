import * as Img from "../../../img/img.js"

const addr = {
    NKB: "Гастробар «Наffига козе баян?!», ул. Великая, 3",
    Berga: "Ресторан «Дом Берга», ул. Большая Московская, 24",
    Charodeyka: "Ресторан «Чародейка», ул. Чудинцева, 1/1",
    Marusya: "Ресторан «Marusya», ул. Предтеченская, 24",
}

export const dishes = [
    {src: `${Img.bearMeat}`, title: "Медвежатина", description: "Классикой новгородской кухни является мясо диких животных. Ресторан «Дом Берга», расположенный в доме 1868 года постройки, который в прошлом принадлежал старинной купеческой семье, предлагает гостям отведать медвежатины, маринованной в можжевеловых ягодах с медом и томленой в печи.", address: `${addr.Berga}`},
    {src: `${Img.pikeperch}`, title: "Судак по-ильменьски", description: "Новгородская кухня отличается обилием рыбных блюд. Ещё в 18 веке в озере Ильмень ловили сигов, балтийских тайменей, и даже осетров! «Судак по-ильменски» и сегодня - одно из самых любимых блюд новгородцев и гостей города.", address: `${addr.NKB}`},
    {src: `${Img.cabbageSoupFromKroshev}`, title: "Щи из крошева", description: "Испокон веков Великий Новгород славится серыми щами из крошева, которые составляют неотъемлемую часть аутентичного новгородского меню во многих ресторанах и кафе города. Хотите познакомиться с кулинарными традициями Новгородчины - обязательно отведайте знаменитые серые щи!", address: `${addr.NKB} | ${addr.Marusya} | ${addr.Charodeyka}`},
    {src: `${Img.pike}`, title: "Ужин рыбака", description: "Щука по-новгородски с обжаренным картофелем и соусом тар-тар.", address: `${addr.NKB}`},
    {src: `${Img.porciniMushroomSoup}`, title: "Суп из белых грибов", description: "Ароматный грибной суп со свежими белыми грибами из новгородских лесов, приготовленный по старинному рецепту. Подаётся с домашней сметаной.", address: `${addr.Berga}`},
    {src: `${Img.vealСheeks}`, title: "Телячьи щёчки", description: "Одно из самых уникальных и популярных блюд – «Телячьи щёчки со злаками и свекольным кремом.»", address: `${addr.NKB} | ${addr.Berga}`},
    {src: `${Img.NovgorodWaffle}`, title: "Новгородская вафля", description: "Новгородская вафля подаётся с кисло-сладкими мандаринами и шоколадным мороженым.", address: `${addr.NKB}`},
    {src: `${Img.Sulchiny}`, title: "Сульчины", description: "Древнее деревенское блюдо из ржаной муки, обильно смазанное сливочным маслом. Именно сульчинами потчевали ямщиков, проезжающих через Новгородские земли. Даже сама Екатерина II, следуя из Москвы в Петербург, часто останавливалась на Новгородчине. Среди блюд, которые готовили для императрицы, были и сульчины к чаю.", address: `${addr.Charodeyka}`},
    {src: `${Img.saladFlyingDucks}`, title: "Салат «Летят утки»", description: "Оливье с уткой. Утка, яблоко, картофель, морковка, огурец, домашний майонез.", address: `${addr.NKB}`},
    {src: `${Img.grandfatherMazai}`, title: "«Дед Мазай»", description: "Нежнейший кролик, молодой картофель, соус Демигляс, холынский огурчик.", address: `${addr.NKB}`}
]

export function disheTemplate(dishe, i, cl) {
    return `
        <article key=${i} class=${cl["dishe-block"]}>
            <img src="${dishe.src}" alt="dishe" class=${cl["dishe-block__img"]} />
            <div class=${cl["dishe-block__main"]}>
                <h1 class=${cl["dishe-block__title"]}>${dishe.title}</h1>
                <div class=${cl["dishe-block__description"]}>${dishe.description}</div>
            </div>
            <div class=${cl["dishe-block__address"]}>
                <img src="${Img.mapMarker}" alt="" class=${cl["address-placemark"]} />
                <p class=${cl["dishe-block__address-p"]}>${dishe.address}</p>
            </div>
        </article>
    `
}