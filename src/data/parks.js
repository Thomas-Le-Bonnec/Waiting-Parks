class Park {
    constructor(name, country, image, apiURL, regularPrice, fastPassPrice) {
        this.name = name;
        this.country = country;
        this.image = image;
        this.apiURL = apiURL;
        this.regularPrice = regularPrice;
        this.fastPassPrice = fastPassPrice;
    }
}


class Country {
    constructor(name, parks) {
        this.name = name;
        this.parks = parks;
    }
}




// France
const disneylandPark = new Park("Disneyland Park", "France", "https://source.unsplash.com/brown-and-blue-castle-under-cloudy-sky-during-daytime-Lmd-CpZOGWc", "/api/parks/4/queue_times.json", 90, 180);
const waltDisneyStudio = new Park("Walt Disney Studio", "France", "https://source.unsplash.com/brown-concrete-building-under-white-sky-during-daytime-bqBy9Rqje6k", "/api/parks/28/queue_times.json", 90, 180);
const parcAsterix = new Park("Parc Astérix", "France", "https://s3.travel-cdn.net/pictures/73538/raw.jpg?rev=3", "/api/parks/9/queue_times.json", 50, 120);
const futuroscope = new Park("Futuroscope", "France", "https://cdn.sortiraparis.com/images/80/101137/922095-futuroscope-visuels-juillet-2023.jpg", "/api/parks/291/queue_times.json", 40, 110);
const walibiRhoneAlpes = new Park("Walibi Rhône-Alpes", "France", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/84/81/ba/mystic-nouvelle-attraction.jpg?w=1200&h=-1&s=1", "/api/parks/301/queue_times.json", 60, 120);

// USA
const disneylandLosAngeles = new Park("Disneyland Los Angeles", "USA", "https://source.unsplash.com/the-top-of-a-building-under-a-cloudy-blue-sky-45P-Jib0OHA", "/api/parks/16/queue_times.json", 130, 300);
const disneyCaliforniaAdventure = new Park("Disneyland California Adventure", "USA", "https://source.unsplash.com/a-ferris-wheel-with-flowers-in-front-of-it-G_IW5FLKZiQ", "/api/parks/17/queue_times.json", 130, 300);


const FALLBACK_API_JSON = {
    "/api/parks/301/queue_times.json": {
        lands: [],
        rides: [
            {
                id: 10714,
                name: " Exotic Island play area 3-6 years old",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9238,
                name: "AirBoat",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 10715,
                name: "Aire de jeux Exotic Island 7-12 ans",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9226,
                name: "Balloon Race",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9211,
                name: "Bamba!",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9207,
                name: "Bambooz River",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9188,
                name: "Be Bop",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9212,
                name: "Carrousel",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9222,
                name: "Concert'O",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9233,
                name: "Coursaire",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9227,
                name: "Dock'N Roll",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9218,
                name: "Explorer Adventure Play Area",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9235,
                name: "Festival City play area",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9216,
                name: "Festival Station",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9202,
                name: "Generator",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9209,
                name: "Gold River",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9225,
                name: "Hurricane",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9229,
                name: "La Baie des Pirates",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9221,
                name: "La Chevauchée",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9208,
                name: "La Coccinelle",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9228,
                name: "La Crique des Moussaillons",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9205,
                name: "Le Galion",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9230,
                name: "Le Lagon Tropical",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9223,
                name: "Le Petit Vapeur",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 10716,
                name: "Le pouvoir de Gaïa",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9231,
                name: "Le Serpent de Mer",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9232,
                name: "Le Squale",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9234,
                name: "Le Tornado",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9204,
                name: "Le Totem",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9236,
                name: "Les P'tits Chaudrons",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9224,
                name: "Les Vagues du Cap Horn",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9213,
                name: "Melody Road",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9214,
                name: "Mini Farm",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9201,
                name: "MonORail",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9237,
                name: "Mystic",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9210,
                name: "On Air",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 11483,
                name: "Patinoire",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9217,
                name: "Surf Music",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9215,
                name: "Tam Tam Aventure",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 10713,
                name: "Tiki Academy",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9203,
                name: "Timber",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9219,
                name: "Volt-O-Vent",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9220,
                name: "WAB Band Tour",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            },
            {
                id: 9206,
                name: "WoodStock Express",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:50:37.000Z"
            }
        ]
    },
    "/api/parks/291/queue_times.json": {
        lands: [],
        rides: [
            {
                id: 7944,
                name: "Arthur, the 4D adventure",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11530,
                name: "Astra Fun Xperiences",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11547,
                name: "Cosmic Collisions",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7942,
                name: "Cyber Avenue",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7945,
                name: "Dances with Robots",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7949,
                name: "Destination Mars",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11549,
                name: "Dynamic Vienne",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7940,
                name: "Dynamic!",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11551,
                name: "Étincelle: the Curse of the Black Opal",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11552,
                name: "Evening show - The Key to Dreams",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7948,
                name: "Futuropolis",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7941,
                name: "IllusiO, a magical destiny",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11542,
                name: "Journey into the Dark",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7956,
                name: "KinéMAX",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 12180,
                name: "Meet the characters at the park entrance",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 12181,
                name: "Meet the characters in front of Kinémax",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7947,
                name: "The Extraordinary Journey",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7943,
                name: "The Gyrotour",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7952,
                name: "The Kinékid",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 7939,
                name: "The Time Machine",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11544,
                name: "The Village",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11533,
                name: "Tornado Chasers",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11756,
                name: "Upside Down House",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T23:00:32.000Z"
            },
            {
                id: 11532,
                name: "Meet the Raving Rabbids at the entrance of the park",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-06T23:00:14.000Z"
            },
            {
                id: 11546,
                name: "Meet the Raving Rabbids in front of the Kinemax",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-08T23:00:15.000Z"
            }
        ]
    },
    "/api/parks/9/queue_times.json": {
        lands: [],
        rides: [
            {
                id: 8207,
                name: "Aérodynamix",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 6457,
                name: "Attention Menhir !",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T16:53:36.000Z"
            },
            {
                id: 11775,
                name: "Chez Gyrofolix",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 5643,
                name: "Discobélix",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T16:58:43.000Z"
            },
            {
                id: 8206,
                name: "Enigmatix",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5653,
                name: "Epidemaïs Croisière",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T16:23:30.000Z"
            },
            {
                id: 8205,
                name: "Etamine",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5651,
                name: "Goudurix",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T16:53:36.000Z"
            },
            {
                id: 6363,
                name: "Hydrolix",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 8201,
                name: "L'Escadrille des As",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5657,
                name: "L'Oxygénarium",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 5646,
                name: "La Galère",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T16:43:31.000Z"
            },
            {
                id: 8189,
                name: "La Petite Tempête",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5654,
                name: "La Rivière d'Elis",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 5650,
                name: "La Trace du Hourra",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 8208,
                name: "Lavomatix",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-10T16:43:31.000Z"
            },
            {
                id: 8184,
                name: "Le Carrousel de César",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 6102,
                name: "Le Cheval de Troie",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 5644,
                name: "Le Défi de César",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 8202,
                name: "Le Mini Carrousel",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 6364,
                name: "Le Petit Train",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5660,
                name: "Le Vol d'Icare",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5645,
                name: "Les Chaises Volantes",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5656,
                name: "Les Chaudrons",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 8183,
                name: "Les Chevaux du Roy",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:03:16.000Z"
            },
            {
                id: 5652,
                name: "Les Espions de César",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T16:23:30.000Z"
            },
            {
                id: 8200,
                name: "Les Petites Chaises Volantes",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T16:43:31.000Z"
            },
            {
                id: 8203,
                name: "Les Petits Chars tamponneurs",
                is_open: true,
                wait_time: 20,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 8190,
                name: "Les Petits Drakkars",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T16:48:31.000Z"
            },
            {
                id: 12427,
                name: "Mission Perdue",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T16:58:43.000Z"
            },
            {
                id: 5649,
                name: "OzIris",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 5642,
                name: "Pégase Express",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 6153,
                name: "SOS Numérobis",
                is_open: true,
                wait_time: 10,
                last_updated: "2023-12-10T17:08:42.000Z"
            },
            {
                id: 10760,
                name: "Tonnerre 2 Zeus",
                is_open: true,
                wait_time: 5,
                last_updated: "2023-12-10T16:53:36.000Z"
            },
            {
                id: 11770,
                name: "Toutatis",
                is_open: true,
                wait_time: 20,
                last_updated: "2023-12-10T17:08:42.000Z"
            }
        ]
    },
    "/api/parks/28/queue_times.json": {
        lands: [
            {
                id: 906,
                name: "Marvel Avengers Campus",
                rides: [
                    {
                        id: 10848,
                        name: "Avengers Assemble: Flight Force",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 10849,
                        name: "Avengers Assemble: Flight Force Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 10845,
                        name: "Spider-Man W.E.B. Adventure",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 10846,
                        name: "Spider-Man W.E.B. Adventure Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 26,
                name: "Production Courtyard",
                rides: [
                    {
                        id: 266,
                        name: "Meet Spider Man",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 40,
                        name: "The Twilight Zone Tower of Terror",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 27,
                name: "Toon Studio",
                rides: [
                    {
                        id: 30,
                        name: "Art of Disney Animation",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 31,
                        name: "Cars Quatre Roues Rallye",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 29,
                        name: "Cars ROAD TRIP",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 32,
                        name: "Crush's Coaster",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7277,
                        name: "Crush's Coaster Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 33,
                        name: "Les Tapis Volants - Flying Carpets Over Agrabah®",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 37,
                        name: "Ratatouille: The Adventure",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7279,
                        name: "Ratatouille: The Adventure Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 34,
                        name: "RC Racer",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7280,
                        name: "RC Racer Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 36,
                        name: "Slinky® Dog Zigzag Spin",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 35,
                        name: "Toy Soldiers Parachute Drop",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7281,
                        name: "Toy Soldiers Parachute Drop Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 25,
                name: "Backlot (Closed)",
                rides: [
                    {
                        id: 38,
                        name: "Armageddon : les Effets Spéciaux",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 39,
                        name: "Rock'n'Roller Coaster starring Aerosmith",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            }
        ],
        rides: []
    },
    "/api/parks/4/queue_times.json": {
        lands: [
            {
                id: 17,
                name: "Adventureland",
                rides: [
                    {
                        id: 2702,
                        name: "Adventure Isle",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7306,
                        name: "Indiana Jones and the Temple of Peril Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2,
                        name: "Indiana Jones™ and the Temple of Peril",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 1,
                        name: "La Cabane des Robinson",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2703,
                        name: "Le Passage Enchanté d'Aladdin",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2705,
                        name: "Pirate Galleon",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 3,
                        name: "Pirates of the Caribbean",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2704,
                        name: "Pirates' Beach",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 18,
                name: "Discoveryland",
                rides: [
                    {
                        id: 4,
                        name: "Autopia®",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 5,
                        name: "Buzz Lightyear Laser Blast",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2706,
                        name: "Disneyland Railroad Discoveryland Station",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 6,
                        name: "Les Mystères du Nautilus",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2707,
                        name: "Mickey’s PhilharMagic",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7,
                        name: "Orbitron®",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 9,
                        name: "Star Tours: The Adventures Continue*",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 8,
                        name: "Star Wars Hyperspace Mountain",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 7278,
                        name: "Star Wars Hyperspace Mountain Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 4573,
                        name: "Welcome to Starport: A Star Wars Encounter",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 19,
                name: "Fantasyland",
                rides: [
                    {
                        id: 19,
                        name: "\"it's a small world\"",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 14,
                        name: "Alice's Curious Labyrinth",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 15,
                        name: "Blanche-Neige et les Sept Nains®",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 17,
                        name: "Casey Jr. – le Petit Train du Cirque",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 11,
                        name: "Disneyland Railroad",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2711,
                        name: "Disneyland Railroad Fantasyland Station",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 18,
                        name: "Dumbo the Flying Elephant",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2710,
                        name: "La Tanière du Dragon",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 16,
                        name: "Le Carrousel de Lancelot ",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 21,
                        name: "Le Pays des Contes de Fées",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 23,
                        name: "Les Voyages de Pinocchio",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 20,
                        name: "Mad Hatter's Tea Cups",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 13,
                        name: "Meet Mickey Mouse",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 22,
                        name: "Peter Pan's Flight",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 24,
                        name: "Princess Pavilion",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 20,
                name: "Frontierland",
                rides: [
                    {
                        id: 25,
                        name: "Big Thunder Mountain",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2714,
                        name: "Disneyland Railroad Frontierland Depot",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2713,
                        name: "Frontierland Playground",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 26,
                        name: "Phantom Manor",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 27,
                        name: "River Rogue Keelboats",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 2712,
                        name: "Rustler Roundup Shootin' Gallery",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 28,
                        name: "Thunder Mesa Riverboat Landing",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            },
            {
                id: 21,
                name: "Main Street U.S.A",
                rides: [
                    {
                        id: 2708,
                        name: "Disneyland Railroad Main Street Station",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    },
                    {
                        id: 12,
                        name: "Main Street Vehicles",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:55:19.000Z"
                    }
                ]
            }
        ],
        rides: []
    },
    "/api/parks/16/queue_times.json": {
        lands: [
            {
                id: 109,
                name: "Adventureland",
                rides: [
                    {
                        id: 326,
                        name: "Indiana Jones™ Adventure",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 296,
                        name: "Jungle Cruise",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 288,
                        name: "Walt Disney's Enchanted Tiki Room",
                        is_open: true,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 110,
                name: "Critter Country",
                rides: [
                    {
                        id: 304,
                        name: "Davy Crockett's Explorer Canoes",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 297,
                        name: "Splash Mountain",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 306,
                        name: "The Many Adventures of Winnie the Pooh",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 111,
                name: "Fantasyland",
                rides: [
                    {
                        id: 307,
                        name: "\"it's a small world\" Holiday",
                        is_open: true,
                        wait_time: 25,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 285,
                        name: "Alice in Wonderland",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 303,
                        name: "Casey Jr. Circus Train",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 275,
                        name: "Dumbo the Flying Elephant",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 277,
                        name: "King Arthur Carrousel",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 278,
                        name: "Mad Tea Party",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 279,
                        name: "Matterhorn Bobsleds",
                        is_open: true,
                        wait_time: 25,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 708,
                        name: "Meet Tinker Bell in Pixie Hollow",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 280,
                        name: "Mr. Toad's Wild Ride",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 281,
                        name: "Peter Pan's Flight",
                        is_open: true,
                        wait_time: 30,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 282,
                        name: "Pinocchio's Daring Journey",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 12108,
                        name: "Sleeping Beauty Castle Walkthrough",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 283,
                        name: "Snow White's Enchanted Wish",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 305,
                        name: "Storybook Land Canal Boats",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 112,
                name: "Frontierland",
                rides: [
                    {
                        id: 323,
                        name: "Big Thunder Mountain Railroad",
                        is_open: true,
                        wait_time: 15,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 331,
                        name: "Pirate's Lair on Tom Sawyer Island",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 328,
                        name: "Sailing Ship Columbia",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 113,
                name: "Main Street U.S.A",
                rides: [
                    {
                        id: 674,
                        name: "Disneyland Railroad",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 690,
                        name: "The Disneyland Story presenting Great Moments with Mr. Lincoln",
                        is_open: true,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 114,
                name: "Mickey's Toontown",
                rides: [
                    {
                        id: 324,
                        name: "Chip 'n' Dale's GADGETcoaster",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 11980,
                        name: "Goofy's How-to-Play Yard",
                        is_open: true,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 11526,
                        name: "Mickey & Minnie's Runaway Railway",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 709,
                        name: "Mickey's House and Meet Mickey Mouse",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 332,
                        name: "Roger Rabbit's Car Toon Spin",
                        is_open: true,
                        wait_time: 30,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 115,
                name: "New Orleans Square",
                rides: [
                    {
                        id: 325,
                        name: "Haunted Mansion Holiday",
                        is_open: true,
                        wait_time: 20,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 289,
                        name: "Pirates of the Caribbean",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 332,
                name: "Star Wars: Galaxy's Edge",
                rides: [
                    {
                        id: 6339,
                        name: "Millennium Falcon: Smugglers Run",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 10903,
                        name: "Millennium Falcon: Smugglers Run Single Rider",
                        is_open: true,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 6340,
                        name: "Star Wars: Rise of the Resistance",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            },
            {
                id: 117,
                name: "Tomorrowland",
                rides: [
                    {
                        id: 287,
                        name: "Astro Orbitor",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 317,
                        name: "Autopia",
                        is_open: true,
                        wait_time: 10,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 273,
                        name: "Buzz Lightyear Astro Blasters",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 274,
                        name: "Disneyland Monorail",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 276,
                        name: "Finding Nemo Submarine Voyage",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 284,
                        name: "Space Mountain",
                        is_open: true,
                        wait_time: 55,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    },
                    {
                        id: 286,
                        name: "Star Tours - The Adventures Continue",
                        is_open: true,
                        wait_time: 5,
                        last_updated: "2023-12-11T06:51:33.000Z"
                    }
                ]
            }
        ],
        rides: [
            {
                id: 12428,
                name: "Adventureland Treehouse inspired by Walt Disney’s Swiss Family Robinson",
                is_open: true,
                wait_time: 0,
                last_updated: "2023-12-11T06:51:33.000Z"
            }
        ]
    },
    "/api/parks/17/queue_times.json": {
        lands: [
            {
                id: 890,
                name: "Avengers Campus",
                rides: [
                    {
                        id: 329,
                        name: "Guardians of the Galaxy - Mission: BREAKOUT!",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 8843,
                        name: "WEB SLINGERS: A Spider-Man Adventure",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 10907,
                        name: "WEB SLINGERS: A Spider-Man Adventure Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 118,
                name: "Buena Vista Street",
                rides: [
                    {
                        id: 873,
                        name: "Red Car Trolley",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 120,
                name: "Cars Land",
                rides: [
                    {
                        id: 2608,
                        name: "Luigi's Joy to the Whirl",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 315,
                        name: "Mater's Jingle Jamboree",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 295,
                        name: "Radiator Springs Racers",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 10904,
                        name: "Radiator Springs Racers Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 121,
                name: "Grizzly Peak",
                rides: [
                    {
                        id: 302,
                        name: "Grizzly River Run",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 293,
                        name: "Redwood Creek Challenge Trail",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 312,
                        name: "Soarin' Around the World",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 122,
                name: "Hollywood Land",
                rides: [
                    {
                        id: 6440,
                        name: "Mickey's PhilharMagic",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 291,
                        name: "Monsters, Inc. Mike & Sulley to the Rescue!",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 11801,
                        name: "Rogers: The Musical",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 868,
                        name: "Sorcerer's Workshop",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 359,
                name: "Paradise Gardens Park",
                rides: [
                    {
                        id: 298,
                        name: "Golden Zephyr",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 319,
                        name: "Goofy's Sky School",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 301,
                        name: "Silly Symphony Swings",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 10905,
                        name: "Silly Symphony Swings Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 316,
                        name: "The Little Mermaid - Ariel's Undersea Adventure",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            },
            {
                id: 124,
                name: "Pixar Pier",
                rides: [
                    {
                        id: 866,
                        name: "Games of Pixar Pier",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 322,
                        name: "Incredicoaster",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 10906,
                        name: "Incredicoaster Single Rider",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 6643,
                        name: "Inside Out Emotional Whirlwind",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 310,
                        name: "Jessie's Critter Carousel",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 300,
                        name: "Jumpin' Jellyfish",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 311,
                        name: "Pixar Pal-A-Round - Swinging",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 5557,
                        name: "Pixar Pal-A-Round – Non-Swinging",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    },
                    {
                        id: 313,
                        name: "Toy Story Midway Mania!",
                        is_open: false,
                        wait_time: 0,
                        last_updated: "2023-12-11T06:57:08.000Z"
                    }
                ]
            }
        ],
        rides: [
            {
                id: 11112,
                name: "Guardians of the Galaxy - Monsters After Dark",
                is_open: false,
                wait_time: 0,
                last_updated: "2023-12-11T06:57:08.000Z"
            }
        ]
    },
}

// Parks List
const parks = [disneylandPark, waltDisneyStudio, parcAsterix, futuroscope, walibiRhoneAlpes, disneylandLosAngeles, disneyCaliforniaAdventure];




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



export { Park, Country, parks, sortParksByCountry, findParkByName, FALLBACK_API_JSON };