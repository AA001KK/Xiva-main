import Man from "/src/assets/admin/man.png";
import Woman from "/src/assets/admin/woman.png";

export const lang = localStorage.getItem("i18nextLng") || "en";
export const main_color = "#EC6416";

export const ROLES = [
  {
    role: "user",
  },
  {
    role: "hotel_owner",
  },
  {
    role: "admin",
  },
];

export const LANGUAGES = [
  {
    lang: "ru",
    short: "Rus",
    title: "russian",
    image: "/translators/ru.png",
  },
  {
    lang: "de",
    short: "Ger",
    language: "german",
    image: "/translators/de.png",
  },
  {
    lang: "en",
    short: "Eng",
    language: "english",
    image: "/translators/en.png",
  },
  {
    lang: "zh",
    short: "China",
    language: "China",
    image: "/translators/zh.png",
  },
];

export const contactData = {
  tel: "+998 00 00 00 00",
  mailto: "xivagoldtour@gmail.com",
  location: "Urganch shahar IT park.",
};

export const tajriba = ["Tanlang", "A1", "A2", "B1", "B2", "C1", "C2"];

export const beds2 = [
  "Tanlang",
  "Bitta 'Bir' kishilik yotoq",
  "Ikkita 'Bir' kishilik yotoq",
  "Uchta 'Bir' kishilik yotoq",
  "Bitta 'Ikki' kishilik yotoq",
  "Ikkita 'Ikki' kishilik yotoq",
];

export const beds = [
  {
    type: 1,
    count: 1,
  },
  {
    type: 1,
    count: 2,
  },
  {
    type: 1,
    count: 3,
  },
  {
    type: 2,
    count: 1,
  },
  {
    type: 2,
    count: 2,
  },
];

export const beds_soni = ["Tanlang", "Bitta", "Ikkita", "Uchta"];

export const level = ["Tanlang", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const carSeat = ["Tanlang", "4 o'rindiq", "22 o'rindiq", "51 o'rindiq"];
export const carCategory = ["tanlang", 1, 2, 3];
export const carDoors = ["tanlang", "2 eshik", "3 eshik", "4 eshik"];
export const translatorsLanguages = [
  {
    language: "russian",
    image: "/translators/ru.png",
  },
  {
    language: "german",
    image: "/translators/de.png",
  },
  {
    language: "english",
    image: "/translators/en.png",
  },
  {
    language: "china",
    image: "/translators/zh.png",
  },
  {
    language: "france",
    image: "/translators/fr.png",
  },
  {
    language: "korean",
    image: "/translators/korea.png",
  },
  {
    language: "brazilian",
    image: "/translators/brazil.png",
  },
  {
    language: "australian",
    image: "/translators/australian.png",
  },
  {
    language: "espanol",
    image: "/translators/espanol.png",
  },
];

export const filterTranslator = [
  {
    title: "translators.translatorFilters.russian",
    img: "/translators/ru.png",
  },
  {
    title: "translators.translatorFilters.german",
    img: "/translators/de.png",
  },
  {
    title: "translators.translatorFilters.english",
    img: "/translators/en.png",
  },
  {
    title: "translators.translatorFilters.china",
    img: "/translators/zh.png",
  },

  {
    title: "translators.translatorFilters.france",
    img: "/translators/fr.png",
  },
  {
    title: "translators.translatorFilters.korean",
    img: "/translators/korea.png",
  },
];

export const filterCars = [
  {
    title: "cars.carsFilters.econom",
    img: "/cars/cobalt.jpg",
  },
  {
    title: "cars.carsFilters.microAvtobus",
    img: "/cars/micro.webp",
  },

  {
    title: "cars.carsFilters.avtobus",
    img: "/cars/avtobus.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "../home/team1.jpg",

    stars: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    userName: "Lilyan Danclark",
    text: "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq ",
    lavozimi: "Traveller",
    img: "../home/team1.jpg",
    stars: [1, 2, 3, 4, 5],
  },

  {
    id: 3,
    userName: "Lilyan Danclark",
    text: "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq ",
    lavozimi: "Traveller",
    img: "../home/team1.jpg",
    stars: [1, 2, 3, 4, 5],
  },
];

export const headerLinks = ["home", "hotels", "cars", "translators", "blog"];

export const langs = ["ru", "en", "de", "zh"];

export const paymentTypes = [
  "/Main/footer/humo.png",
  "/Main/footer/visa.png",
  "/Main/footer/master.png",
  "/Main/footer/uzcard.png",
];

export const genderUser = [
  {
    title: "male",
    image: Man,
  },
  {
    title: "female",
    image: Woman,
  },
  {
    title: "other",
    image: Man,
  },
];

const hotel_comforts = [""];
