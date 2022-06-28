const Team = require('../models/teams.js')

const teamData = [
    {
        name: "Qatar",
        fifa_ranking: 49,
        capital: "Doha",
        times_won: 0,
        star_player: "Hassan Al-Haydos",
        image: "Qatar.png",
        group: "A"
    },
    {
        name: "Ecuador",
        fifa_ranking: 44,
        capital: "Quito",
        times_won: 0,
        star_player: "Enner Valencia",
        image: "Ecuador.jpg",
        group: "A"
    },
    {
        name: "Senegal",
        fifa_ranking: 18,
        capital: "Dakar",
        times_won: 0,
        star_player: "Sadio Mane",
        image: "Senegal.png",
        group: "A"
    },
    {
        name: "Netherlands",
        fifa_ranking: 8,
        capital: "Amsterdam",
        times_won: 0,
        star_player: "Virgil Van Dijk",
        image: "Netherlands.png",
        group: "A"
    },
    {
        name: "England",
        fifa_ranking: 5,
        capital: "London",
        times_won: 1,
        star_player: "Harry Kane",
        image: "England.jpg",
        group: "B"
    },
    {
        name: "Iran",
        fifa_ranking: 23,
        capital: "Tehran",
        times_won: 0,
        star_player: "Mehdi Taremi",
        image: "Iran.png",
        group: "B"
    },
    {
        name: "USA",
        fifa_ranking: 14,
        capital: "Washington DC",
        times_won: 0,
        star_player: "Christian Pulisic",
        image: "USA.png",
        group: "B"
    },
    {
        name: "Wales",
        fifa_ranking: 19,
        capital: "Cardiff",
        times_won: 0,
        star_player: "Gareth Bale",
        image: "Wales.jpg",
        group: "B"
    },
    {
        name: "Argentina",
        fifa_ranking: 3,
        capital: "Buenos Aries",
        times_won: 2,
        star_player: "Lionel Messi",
        image: "Argentina.jpg",
        group: "C"
    },
    {
        name: "Saudi Arabia",
        fifa_ranking: 53,
        capital: "Riyadh",
        times_won: 0,
        star_player: "Salem Al-Dawsari",
        image: "Saudi-Arabia.png",
        group: "C"
    },
    {
        name: "Mexico",
        fifa_ranking: 12,
        capital: "Mexico City",
        times_won: 0,
        star_player: "Javier Hernandez",
        image: "Mexico.png",
        group: "C"
    },
    {
        name: "Poland",
        fifa_ranking: 26,
        capital: "Warsaw",
        times_won: 0,
        star_player: "Robert Lewandowski",
        image: "Poland.png",
        group: "C"
    },
    {
        name: "France",
        fifa_ranking: 4,
        capital: "Paris",
        times_won: 2,
        star_player: "Kylian Mbappe",
        image: "France.png",
        group: "D"
    },
    {
        name: "Denmark",
        fifa_ranking: 10,
        capital: "Copenhagen",
        times_won: 0,
        star_player: "Christian Eriksen",
        image: "Denmark.png",
        group: "D"
    },
    {
        name: "Tunisia",
        fifa_ranking: 30,
        capital: "Tunis",
        times_won: 0,
        star_player: "Wahbi Khazri",
        image: "Tunisia.png",
        group: "D"
    },
    {
        name: "Australia",
        fifa_ranking: 39,
        capital: "Canberra",
        times_won: 0,
        star_player: "Mathew Ryan",
        image: "Australia.jpg",
        group: "D"
    },
    {
        name: "Spain",
        fifa_ranking: 6,
        capital: "Madrid",
        times_won: 1,
        star_player: "Sergio Ramos",
        image: "Spain.png",
        group: "E"
    },
    {
        name: "Germany",
        fifa_ranking: 11,
        capital: "Berlin",
        times_won: 4,
        star_player: "Serge Gnabry",
        image: "Germany.png",
        group: "E"
    },
    {
        name: "Japan",
        fifa_ranking: 24,
        capital: "Tokyo",
        times_won: 0,
        star_player: "Takumi Minamino",
        image: "Japan.png",
        group: "E"
    },
    {
        name: "Costa Rica",
        fifa_ranking: 34,
        capital: "San Jose",
        times_won: 0,
        star_player: "Keylor Navas",
        image: "Costa-Rica.png",
        group: "E"
    },
    {
        name: "Belgium",
        fifa_ranking: 2,
        capital: "Brussels",
        times_won: 0,
        star_player: "Kevin De Bruyne",
        image: "Belgium.jpg",
        group: "F"
    },
    {
        name: "Canada",
        fifa_ranking: 43,
        capital: "Ottawa",
        times_won: 0,
        star_player: "Alphonso Davies",
        image: "Canada.png",
        group: "F"
    },
    {
        name: "Morocco",
        fifa_ranking: 22,
        capital: "Rabat",
        times_won: 0,
        star_player: "Hakim Ziyech",
        image: "Morocco.png",
        group: "F"
    },
    {
        name: "Croatia",
        fifa_ranking: 15,
        capital: "Zagreb",
        times_won: 0,
        star_player: "Luka Modric",
        image: "Croatia.png",
        group: "F"
    },
    {
        name: "Brazil",
        fifa_ranking: 1,
        capital: "Brasilia",
        times_won: 5,
        star_player: "Neymar",
        image: "Brazil.png",
        group: "G"
    },
    {
        name: "Serbia",
        fifa_ranking: 25,
        capital: "Belgrade",
        times_won: 0,
        star_player: "Dusan Vlahovic",
        image: "Serbia.png",
        group: "G"
    },

    {
        name: "Switzerland",
        fifa_ranking: 16,
        capital: "Berne",
        times_won: 0,
        star_player: "Granit Xhaka",
        image: "Switzerland.png",
        group: "G"
    },    
    {
        name: "Cameroon",
        fifa_ranking: 38,
        capital: "Yaounde",
        times_won: 0,
        star_player: "Joel Matip",
        image: "Cameroon.png",
        group: "G"
    },    
    {
        name: "Portugal",
        fifa_ranking: 9,
        capital: "Lisbon",
        times_won: 0,
        star_player: "Cristiano Ronaldo",
        image: "Portugal.png",
        group: "H"
    },    
    {
        name: "Ghana",
        fifa_ranking: 60,
        capital: "Accra",
        times_won: 0,
        star_player: "Thomas Partey",
        image: "Ghana.png",
        group: "H"
    },    
    {
        name: "Uruguay",
        fifa_ranking: 13,
        capital: "Montevideo",
        times_won: 2,
        star_player: "Luis Suarez",
        image: "Uruguay.jpg",
        group: "H"
    },   
    {
        name: "South Korea",
        fifa_ranking: 28,
        capital: "Seoul",
        times_won: 0,
        star_player: "Son Heung-Min",
        image: "South-Korea.png",
        group: "H"
    },    
]


// setting variable to export data
const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;