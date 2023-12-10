class Park {
    constructor(name, country, image, apiURL) {
        this.name = name;
        this.country = country;
        this.image = image;
        this.apiURL = apiURL;
    }
}


class Country {
    constructor(name, parks) {
        this.name = name;
        this.parks = parks;
    }
}




// France
const disneylandPark = new Park("Disneyland Park", "France", "https://source.unsplash.com/brown-and-blue-castle-under-cloudy-sky-during-daytime-Lmd-CpZOGWc", "/api/parks/4/queue_times.json");
const waltDisneyStudio = new Park("Walt Disney Studio", "France", "https://source.unsplash.com/brown-concrete-building-under-white-sky-during-daytime-bqBy9Rqje6k", "/api/parks/28/queue_times.json");
const parcAsterix = new Park("Parc Astérix", "France", "https://s3.travel-cdn.net/pictures/73538/raw.jpg?rev=3", "/api/fr/parks/9/queue_times.json");
const futuroscope = new Park("Futuroscope", "France", "https://cdn.sortiraparis.com/images/80/101137/922095-futuroscope-visuels-juillet-2023.jpg", "/api/fr/parks/291/queue_times.json");
const walibiRhoneAlpes = new Park("Walibi Rhône-Alpes", "France", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/84/81/ba/mystic-nouvelle-attraction.jpg?w=1200&h=-1&s=1", "/api/fr/parks/301/queue_times.json");


// Parks List
const parks = [disneylandPark, waltDisneyStudio, parcAsterix, futuroscope, walibiRhoneAlpes];




// Sort every park by country
function sortParksByCountry(parkList) {
    const countryMap = {};

    // Regrouper les parcs par pays dans une carte (map)
    parkList.forEach(park => {
        if (!countryMap[park.country]) {
            countryMap[park.country] = [];
        }
        countryMap[park.country].push(park);
    });

    // Créer une liste de Country à partir de la carte
    const countryList = Object.entries(countryMap).map(([countryName, parks]) => {
        return new Country(countryName, parks);
    });

    return countryList;
}


function findParkByName(parkList, parkName) {
    const foundPark = parkList.find(park => park.name === parkName);

    return foundPark || null;
}



export { Park, Country, parks, sortParksByCountry, findParkByName };