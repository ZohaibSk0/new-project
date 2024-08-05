import image1 from "./cards13.jpg";
import image2 from "./cards14.jpg";
import image3 from "./cards15.jpg";
import image4 from "./cards16.jpg";
import image5 from "./cards17.jpg";
import image6 from "./cards18.jpg";
import image7 from "./cards19.jpg";
import image8 from "./cards20.jpg";
import profile from "./ProfileCard";
const reviewers = [
  {
    1: {
      image: image8,
      name: "Matt Desmond",
      title: "Senior Product Designer",
      location: "New York, USA",
      bio: "A seasoned traveler and passionate photographer, Matt has spent years journeying across the globe, capturing the unique essence of each destination through his lens. His work reflects a deep appreciation for diverse cultures and landscapes, blending artistic vision with technical expertise.",
      email: "matt23@yahoo.com",
      rating: "4.5",
      followers: "56k",
      destinations: {
        Greece: {
          review:
            "Greece offers a blend of ancient history, stunning islands, and delicious cuisine.",
          rating: 4.8,
          timeOfReview: "08:15",
        },
        Indonesia: {
          review:
            "Indonesia is known for its vibrant culture, beautiful beaches, and diverse landscapes.",
          rating: 4.9,
          timeOfReview: "7:15",
        },
        Peru: {
          review:
            "Peru is home to Machu Picchu, a UNESCO World Heritage site, and offers breathtaking mountain views.",
          rating: 4.9,
          timeOfReview: "09:15",
        },
        Italy: {
          review:
            "Italy is a country of art, history, and delicious food, with cities like Venice known for its canals.",
          rating: 4.8,
          timeOfReview: "3:15",
        },
        Iceland: {
          review:
            "Iceland's landscapes are surreal, with volcanoes, glaciers, and natural hot springs.",
          rating: 4.8,
          timeOfReview: "09:15",
        },
        Japan: {
          review:
            "Japan is a blend of tradition and modernity, with cities like Kyoto offering historic temples and gardens.",
          rating: 4.7,
          timeOfReview: "11:13",
        },
      },
    },
  },
  {
    2: {
      image: image2,
      name: "Jhon",
      location: "Canada",
      bio: "Jhon is an avid diver and marine enthusiast who explores the world's oceans and coral reefs.",
      email: "jhon@example.com",
      destinations: {
        GreatBarrierReef: {
          review:
            "The Great Barrier Reef is a paradise for divers with its vibrant marine life.",
          rating: 4.9,
          timeOfReview: "09:10",
        },
        CapeTown: {
          review:
            "Cape Town offers stunning beaches, vibrant culture, and majestic mountains.",
          rating: 4.7,
          timeOfReview: "09:00",
        },
        Petra: {
          review:
            "Petra is an archaeological wonder with impressive ancient ruins.",
          rating: 4.7,
          timeOfReview: "7:08",
        },
        Marrakech: {
          review:
            "Marrakech is a vibrant city with bustling souks and beautiful palaces.",
          rating: 4.7,
          timeOfReview: "04:17",
        },
        BanffNationalPark: {
          review:
            "Banff National Park is a nature lover's paradise with breathtaking landscapes.",
          rating: 4.6,
          timeOfReview: "09:08",
        },
        NewYorkCity: {
          review:
            "New York City is a bustling metropolis with iconic landmarks and diverse culture.",
          rating: 4.8,
          timeOfReview: "6:15",
        },
      },
    },
  },
  {
    3: {
      image: image3,
      name: "Alex",
      location: "Italy",
      bio: "Alex is a travel blogger and photographer passionate about capturing the essence of destinations.",
      email: "Alex@example.com",
      destinations: {
        Paris: {
          review:
            "Paris is the epitome of romance with its iconic landmarks and charming streets.",
          rating: 4.9,
          timeOfReview: "09:15",
        },
        Tokyo: {
          review:
            "Tokyo is a modern city blending traditional culture with futuristic innovation.",
          rating: 4.7,
          timeOfReview: "05:15",
        },
        Dubai: {
          review:
            "Dubai is a city of superlatives with extravagant architecture and luxury shopping.",
          rating: 4.8,
          timeOfReview: "03:15",
        },
        RioDeJaneiro: {
          review:
            "Rio de Janeiro is a vibrant city with stunning beaches and lively carnival celebrations.",
          rating: 4.6,
          timeOfReview: "2:15",
        },
        Prague: {
          review:
            "Prague is a fairy-tale city with medieval architecture and a rich cultural heritage.",
          rating: 4.7,
          timeOfReview: "04:15",
        },
        Sydney: {
          review:
            "Sydney is a dynamic city with beautiful beaches, iconic landmarks, and a laid-back vibe.",
          rating: 4.8,
          timeOfReview: "03:16",
        },
      },
    },
  },
  {
    4: {
      image: image4,
      name: "James",
      location: "Australia",
      bio: "James is a culture enthusiast with a fascination for history and urban exploration.",
      email: "james@example.com",
      destinations: {
        London: {
          review:
            "London is a diverse city with rich history, world-class museums, and vibrant nightlife.",
          rating: 4.8,
          timeOfReview: "7:15",
        },
        Rome: {
          review:
            "Rome is a city where ancient history meets modern life, with iconic landmarks at every corner.",
          rating: 4.7,
          timeOfReview: "05:15",
        },
        Barcelona: {
          review:
            "Barcelona is a vibrant city with stunning architecture, delicious food, and lively atmosphere.",
          rating: 4.8,
          timeOfReview: "8:15",
        },
        Amsterdam: {
          review:
            "Amsterdam is a charming city known for its picturesque canals, historic buildings, and artistic heritage.",
          rating: 4.7,
          timeOfReview: "09:15",
        },
        Istanbul: {
          review:
            "Istanbul is a city where east meets west, offering a blend of cultures, history, and vibrant markets.",
          rating: 4.6,
          timeOfReview: "10:15",
        },
        SanFrancisco: {
          review:
            "San Francisco is a city of innovation with iconic landmarks like the Golden Gate Bridge and vibrant neighborhoods.",
          rating: 4.8,
          timeOfReview: "11:15",
        },
      },
    },
  },
];

export default reviewers;

// arr=[Reviewers.reviews];
// arr. sort wrt timeof review: ==> latest review = index 0, 2nd latest = 1 index;
// ["26/7/2024-10:33PM", "24/7/2024-6:33PM",...]
// loop=>(map function)
// arr.index>=2
