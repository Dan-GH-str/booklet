import * as Img from "../../../img/img.js"
import addr from "../../../content/addresses/addressesEN.js"

export const dishes = [
    {src: `${Img.bearMeat}`, title: "Bear meat", description: "The classic of Novgorod cuisine is the meat of wild animals. The restaurant «Berg's House», located in a house built in 1868, which used to belong to an old merchant family, offers its guests to taste bear meat marinated in juniper berries and honey and stewed in the oven.", address: `${addr.Berga}`},
    {src: `${Img.pikeperch}`, title: "Pike-perch in Ilmen", description: "Novgorod cuisine is characterized by an abundance of fish dishes. As far back as the 18th century, whitefish, Baltic taimen, and even sturgeons were caught in Lake Ilmen! «Ilmen-style Sudak» is still one of the most favorite dishes of Novgorodians and guests of the city.", address: `${addr.NKB}`},
    {src: `${Img.cabbageSoupFromKroshev}`, title: "Shchi from kroshevo", description: "For centuries Veliky Novgorod has been famous for its grey cabbage soup, which is an integral part of the authentic Novgorodian menu in many restaurants and cafes of the city. If you want to get acquainted with the culinary traditions of Novgorod region, you should try the famous grey soup!", address: `${addr.NKB} | ${addr.Marusya} | ${addr.Charodeyka}`},
    {src: `${Img.pike}`, title: "Fisherman's Dinner", description: "Novgorod-style pike with roasted potatoes and tartar sauce.", address: `${addr.NKB}`},
    {src: `${Img.porciniMushroomSoup}`, title: "Porcini mushroom soup", description: "Flavorful mushroom soup with fresh porcini mushrooms from Novgorod forests, cooked according to an old recipe. Served with homemade sour cream.", address: `${addr.Berga}`},
    {src: `${Img.vealСheeks}`, title: "Veal cheeks", description: "One of the most unique and popular dishes is Veal Cheeks with Cereal and Beet Cream.", address: `${addr.NKB} | ${addr.Berga}`},
    {src: `${Img.NovgorodWaffle}`, title: "Novgorod waffle", description: "Novgorod waffle served with sweet and sour mandarins and chocolate ice cream.", address: `${addr.NKB}`},
    {src: `${Img.Sulchiny}`, title: "Sulchiny", description: "An ancient rustic dish made of rye flour, richly smeared with butter. It was sulchin that was served to coachmen passing through the Novgorod lands. Even Catherine II herself, traveling from Moscow to St. Petersburg, often stopped in Novgorod. Among the dishes prepared for the empress were sulchins for tea.", address: `${addr.Charodeyka}`},
    {src: `${Img.saladFlyingDucks}`, title: "«Ducks are flying» salad", description: "Olivier with duck. Duck, apple, potatoes, carrots, cucumber, homemade mayonnaise.", address: `${addr.NKB}`},
    {src: `${Img.grandfatherMazai}`, title: "«Grandfather Mazai»", description: "Tender rabbit, young potatoes, Demiglace sauce, Holynsky pickle.", address: `${addr.NKB}`}
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