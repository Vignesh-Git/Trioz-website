import __stayListing from "./jsons/__stayListing.json";
import __carsListing from "./jsons/__carsListing.json";
import __experiencesListing from "./jsons/__experiencesListing.json";
import {
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
} from "./taxonomies";
import { CarDataType, ExperiencesDataType, StayDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import car1 from "@/images/cars/1.png";
import car2 from "@/images/cars/2.png";
import car3 from "@/images/cars/3.png";
import car4 from "@/images/cars/4.png";
import car5 from "@/images/cars/5.png";
import car6 from "@/images/cars/6.png";
import car7 from "@/images/cars/7.png";
import car8 from "@/images/cars/8.png";
import car9 from "@/images/cars/9.png";
import car10 from "@/images/cars/10.png";
import car11 from "@/images/cars/11.png";
import car12 from "@/images/cars/12.png";
import car13 from "@/images/cars/13.png";
import car14 from "@/images/cars/14.png";
import car15 from "@/images/cars/15.png";
import car16 from "@/images/cars/16.png";
import hairstyle_1 from "@/images/gallery_hairstyle_1.png";
import hairstyle_2 from "@/images/gallery_hairstyle_2.png";
import bridalMakeup1 from "@/images/gallery_bridal_makeup_1.png";
import bridalMakeup2 from "@/images/gallery_bridal_makeup_2.png";
import mehandi_1 from "@/images/gallery_mehandi_1.png";
import mehandi_2 from "@/images/gallery_mehandi_2.png";
import saree_1 from "@/images/gallery_saree_1.png";
import saree_2 from "@/images/gallery_saree_2.png";
import marriage_set_1 from "@/images/gallery_marriage_set_1.png";
import marriage_set_2 from "@/images/gallery_marriage_set_2.png";
import boutique_hair from "@/images/gallery_boutique_hair_1.png";
import menicure from "@/images/gallery_menicure.png";
import facial from "@/images/gallery_facial.png";
import pedicure from "@/images/gallery_pedicure.png";
import hairCut from "@/images/gallery_hair_cut.png";
import vaxing from "@/images/gallery_vaxing.png";
import { Route } from "@/routers/types";
const carsImgs = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  car8,
  car9,
  car10,
  car11,
  car12,
  car13,
  car14,
  car15,
  car16,
];


const galleryListings = [
  {
    "id": "id1",
    "authorId": 10,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 17,
    "listingCategory": {
      "name" : "Bridal Makeup"
    },
    "title": "Hair Styles",
    "featuredImage": car1,
    "galleryImgs": [
      hairstyle_1,
      hairstyle_2,
      hairstyle_1,
      hairstyle_2
    ],
    "commentCount": 70,
    "viewCount": 602,
    "like": false,
    "address": "1 Anzinger Court",
    "reviewStart": 4.8,
    "reviewCount": 28,
    "price": "₹500",
    "maxGuests": 6,
    "bedrooms": 10,
    "bathrooms": 3,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 55.2094559, "lng": 61.5594641 }
  },
  {
    "id": "id_2",
    "authorId": 1,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 9,
  "listingCategory": { "name": "Bridal Makeup" },
    "title": "Face makeup",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      bridalMakeup1, bridalMakeup2,
      bridalMakeup1, bridalMakeup2
    ],
    "commentCount": 16,
    "viewCount": 196,
    "like": false,
    "address": "32923 Judy Hill",
    "reviewStart": 4.4,
    "reviewCount": 198,
    "price": "₹2500",
    "maxGuests": 10,
    "bedrooms": 6,
    "bathrooms": 7,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 55.1972153, "lng": 61.4407266 }
  },
  {
    "id": "id_3",
    "authorId": 6,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 11,
  "listingCategory": { "name": "Bridal Makeup" },
    "title": "Mehandi Designs",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      mehandi_1, mehandi_2, 
      mehandi_1, mehandi_2
    ],
    "commentCount": 47,
    "viewCount": 843,
    "like": true,
    "address": "6731 Killdeer Park",
    "reviewStart": 3.6,
    "reviewCount": 16,
    "price": "₹1500",
    "maxGuests": 9,
    "bedrooms": 9,
    "bathrooms": 8,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.247483, "lng": 61.5229791 }
  },
  {
    "id": "id_4",
    "authorId": 8,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 6,
  "listingCategory": { "name": "Bridal Makeup" },
    "title": "Saree Draping",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      saree_1, saree_2,
      saree_1, saree_2
    ],
    "commentCount": 6,
    "viewCount": 91,
    "like": false,
    "address": "35 Sherman Park",
    "reviewStart": 4.8,
    "reviewCount": 34,
    "price": "₹250",
    "maxGuests": 6,
    "bedrooms": 7,
    "bathrooms": 5,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.2342034, "lng": 61.5409607 }
  },
  {
    "id": "id_5",
    "authorId": 2,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 11,
  "listingCategory": { "name": "Boutique" },
    "title": "Muhurtham Set",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      marriage_set_1, marriage_set_2,
      marriage_set_1, marriage_set_2
    ],
    "commentCount": 91,
    "viewCount": 574,
    "like": false,
    "address": "3 Crest Line Park",
    "reviewStart": 3.4,
    "reviewCount": 340,
    "price": "₹3000",
    "maxGuests": 8,
    "bedrooms": 3,
    "bathrooms": 2,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.2288039, "lng": 61.6050232 }
  },
  {
    "id": "id_6",
    "authorId": 4,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 7,
  "listingCategory": { "name": "Boutique" },
    "title": "Reception Set",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      marriage_set_2, marriage_set_1,
      marriage_set_1, marriage_set_2
    ],
    "commentCount": 21,
    "viewCount": 210,
    "like": true,
    "address": "55974 Waxwing Junction",
    "reviewStart": 3.8,
    "reviewCount": 508,
    "price": "₹4000",
    "maxGuests": 8,
    "bedrooms": 7,
    "bathrooms": 7,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.1952216, "lng": 61.6115793 }
  },
  {
    "id": "id_7",
    "authorId": 4,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 20,
  "listingCategory": { "name": "Boutique" },
    "title": "Stylish Set",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      marriage_set_1, marriage_set_2
    ],
    "commentCount": 10,
    "viewCount": 311,
    "like": false,
    "address": "79361 Chinook Place",
    "reviewStart": 3.0,
    "reviewCount": 481,
    "price": "₹3500",
    "maxGuests": 9,
    "bedrooms": 2,
    "bathrooms": 5,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 55.2211607, "lng": 61.5065318 }
  },
  {
    "id": "id_8",
    "authorId": 8,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 10,
  "listingCategory": { "name": "Boutique" },
    "title": "Hair Extensions",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      boutique_hair, boutique_hair,
      boutique_hair, boutique_hair
    ],
    "commentCount": 40,
    "viewCount": 905,
    "like": true,
    "address": "6 Chive Avenue",
    "reviewStart": 3.9,
    "reviewCount": 188,
    "price": "₹1500",
    "maxGuests": 6,
    "bedrooms": 7,
    "bathrooms": 4,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.2126851, "lng": 61.4912261 }
  },
  {
    "id": "id_9",
    "authorId": 1,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 8,
  "listingCategory": { "name": "Salon" },
    "title": "Facial & Spa",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      facial, facial,
      facial, facial
    ],
    "commentCount": 38,
    "viewCount": 588,
    "like": true,
    "address": "77058 Havey Terrace",
    "reviewStart": 3.4,
    "reviewCount": 450,
    "price": "₹2000",
    "maxGuests": 8,
    "bedrooms": 7,
    "bathrooms": 6,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.185907, "lng": 61.4864299 }
  },
  {
    "id": "id_10",
    "authorId": 2,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 1,
  "listingCategory": { "name": "Salon" },
    "title": "Menicure & Pedicure",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      menicure, pedicure,
      menicure, pedicure
    ],
    "commentCount": 49,
    "viewCount": 794,
    "like": true,
    "address": "691 Northridge Plaza",
    "reviewStart": 4.5,
    "reviewCount": 363,
    "price": "₹1800",
    "maxGuests": 8,
    "bedrooms": 2,
    "bathrooms": 10,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 55.1735735, "lng": 61.4991107 }
  },
  {
    "id": "id_11",
    "authorId": 3,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 19,
  "listingCategory": { "name": "Salon" },
    "title": "Hair Cut & Coloring",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      hairCut, hairCut,
      hairCut, hairCut
    ],
    "commentCount": 13,
    "viewCount": 566,
    "like": true,
    "address": "28913 Ridgeway Terrace",
    "reviewStart": 3.9,
    "reviewCount": 436,
    "price": "₹2200",
    "maxGuests": 5,
    "bedrooms": 3,
    "bathrooms": 4,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "id_12",
    "authorId": 7,
    "date": "May 20, 2021",
    "href": "/contact",
  "listingCategoryId": 4,
  "listingCategory": { "name": "Salon" },
    "title": "Threading & Vaxing",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      vaxing, vaxing,
      vaxing, vaxing
    ],
    "commentCount": 17,
    "viewCount": 12,
    "like": true,
    "address": "43 Columbus Drive",
    "reviewStart": 3.4,
    "reviewCount": 301,
    "price": "₹800",
    "maxGuests": 5,
    "bedrooms": 7,
    "bathrooms": 2,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "id_13",
    "authorId": 1,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 6,
    "title": "Swan, Thatcham by Marston's Inns ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/4665034/pexels-photo-4665034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1484981/pexels-photo-1484981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6238614/pexels-photo-6238614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 55,
    "viewCount": 963,
    "like": false,
    "address": "02320 Bluestem Pass",
    "reviewStart": 4.3,
    "reviewCount": 99,
    "price": "$154",
    "maxGuests": 5,
    "bedrooms": 10,
    "bathrooms": 6,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "id_14",
    "authorId": 3,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 13,
    "title": "Stonehouse Court Hotel - A Bespoke Hotel ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/1652423/pexels-photo-1652423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3263716/pexels-photo-3263716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 59,
    "viewCount": 660,
    "like": false,
    "address": "778 Lyons Point",
    "reviewStart": 3.9,
    "reviewCount": 137,
    "price": "$36",
    "maxGuests": 6,
    "bedrooms": 2,
    "bathrooms": 5,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "id_15",
    "authorId": 10,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 18,
    "title": "The Ethorpe Hotel by Greene King Inns ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      "https://images.pexels.com/photos/6238615/pexels-photo-6238615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2867761/pexels-photo-2867761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 12,
    "viewCount": 9,
    "like": false,
    "address": "7 Lighthouse Bay Parkway",
    "reviewStart": 3.5,
    "reviewCount": 415,
    "price": "$288",
    "maxGuests": 5,
    "bedrooms": 9,
    "bathrooms": 2,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "id_16",
    "authorId": 7,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 19,
    "title": "Tumbling Weir Hotel ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3935330/pexels-photo-3935330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2029163/pexels-photo-2029163.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 18,
    "viewCount": 516,
    "like": true,
    "address": "78173 Lillian Pass",
    "reviewStart": 3.3,
    "reviewCount": 192,
    "price": "$187",
    "maxGuests": 8,
    "bedrooms": 4,
    "bathrooms": 9,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "a377ce70-0bff-4659-bf4c-d2e811c278f0",
    "authorId": 5,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 9,
    "title": "Saracens Head Hotel by Greene King Inns ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 54,
    "viewCount": 475,
    "like": true,
    "address": "20 Tomscot Street",
    "reviewStart": 3.8,
    "reviewCount": 154,
    "price": "$140",
    "maxGuests": 6,
    "bedrooms": 6,
    "bathrooms": 10,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "3c080cc5-4069-4b3a-8faa-24b55be1b6d0",
    "authorId": 8,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 19,
    "title": "The Chantry ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 56,
    "viewCount": 457,
    "like": true,
    "address": "88232 Debra Lane",
    "reviewStart": 4.1,
    "reviewCount": 584,
    "price": "$35",
    "maxGuests": 5,
    "bedrooms": 6,
    "bathrooms": 3,
    "saleOff": "-10% today",
    "isAds": false,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "aceb69b4-e2c0-479c-9bdc-5d8d36802627",
    "authorId": 3,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 13,
    "title": "Littledean House Hotel ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/3935326/pexels-photo-3935326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3935326/pexels-photo-3935326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3935326/pexels-photo-3935326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3935326/pexels-photo-3935326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 83,
    "viewCount": 41,
    "like": false,
    "address": "929 2nd Way",
    "reviewStart": 4.6,
    "reviewCount": 569,
    "price": "$80.27",
    "maxGuests": 7,
    "bedrooms": 9,
    "bathrooms": 3,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "96f8de27-fdc1-4df8-8efb-532c17c3abe5",
    "authorId": 4,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 3,
    "title": "Original White Hart, Ringwood by Marston's Inns ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/6527028/pexels-photo-6527028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6527028/pexels-photo-6527028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6527028/pexels-photo-6527028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6527028/pexels-photo-6527028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 47,
    "viewCount": 30,
    "like": false,
    "address": "855 Texas Alley",
    "reviewStart": 4.3,
    "reviewCount": 35,
    "price": "$364.98",
    "maxGuests": 8,
    "bedrooms": 10,
    "bathrooms": 9,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "daa69a49-92e0-420a-b799-a510b9cdfbb9",
    "authorId": 3,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 2,
    "title": "The Bell Hotel ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/1539777/pexels-photo-1539777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1539777/pexels-photo-1539777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1539777/pexels-photo-1539777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1539777/pexels-photo-1539777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 34,
    "viewCount": 733,
    "like": true,
    "address": "3633 Meadow Valley Circle",
    "reviewStart": 3.0,
    "reviewCount": 375,
    "price": "$364.42",
    "maxGuests": 6,
    "bedrooms": 10,
    "bathrooms": 9,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "b476d787-46ef-43c4-af2c-8e3d0e24f24f",
    "authorId": 2,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 14,
    "title": "Harper's Steakhouse Southampton ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/6238683/pexels-photo-6238683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6238683/pexels-photo-6238683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6238683/pexels-photo-6238683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6238683/pexels-photo-6238683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 96,
    "viewCount": 49,
    "like": false,
    "address": "3 Derek Crossing",
    "reviewStart": 3.4,
    "reviewCount": 494,
    "price": "$229.27",
    "maxGuests": 10,
    "bedrooms": 9,
    "bathrooms": 8,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "386f3a6a-8690-4991-9d00-c048ac9540e1",
    "authorId": 4,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 10,
    "title": "Strawberry Bank Hotel ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 48,
    "viewCount": 740,
    "like": true,
    "address": "843 Elmside Center",
    "reviewStart": 3.2,
    "reviewCount": 248,
    "price": "$176.39",
    "maxGuests": 10,
    "bedrooms": 8,
    "bathrooms": 8,
    "saleOff": "-10% today",
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  },
  {
    "id": "7182e25c-26f9-4a30-a9a8-31e49cad4b94",
    "authorId": 3,
    "date": "May 20, 2021",
    "href": "/contact",
    "listingCategoryId": 5,
    "title": "OYO Honeycroft Lodge ",
    "featuredImage": "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "galleryImgs": [
      "https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
    "commentCount": 24,
    "viewCount": 392,
    "like": false,
    "address": "51 Messerschmidt Parkway",
    "reviewStart": 3.4,
    "reviewCount": 120,
    "price": "$79.14",
    "maxGuests": 5,
    "bedrooms": 4,
    "bathrooms": 9,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 59.955413, "lng": 30.337844 }
  }
]

const DEMO_STAY_LISTINGS = galleryListings.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categoryFromTax = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  // prefer explicit listingCategory provided in the JSON (useful for demos)
  const category = post.listingCategory && (post.listingCategory as any).name
    ? ({
        ...(post.listingCategory as any),
        taxonomy: "category",
        href: (post.listingCategory as any).href || categoryFromTax?.href,
      } as any)
    : categoryFromTax;

  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: false,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    href: post.href as Route,
  };
});

const DEMO_EXPERIENCES_LISTINGS = __experiencesListing.map(
  (post, index): ExperiencesDataType => {
    //  ##########  GET CATEGORY BY CAT ID ######## //
    const category = DEMO_EXPERIENCES_CATEGORIES.filter(
      (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0];

    return {
      ...post,
      id: `experiencesListing_${index}_`,
      saleOff: !index ? "-20% today" : post.saleOff,
      isAds: !index ? true : post.isAds,
      author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      listingCategory: category,
      href: post.href as Route,
    };
  }
);

const DEMO_CAR_LISTINGS = __carsListing.map((post, index): CarDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_EXPERIENCES_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    id: `carsListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    featuredImage: carsImgs[index],
    href: post.href as Route,
  };
});

export { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS, DEMO_CAR_LISTINGS };
