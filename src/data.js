const PRODUCTS = {
  colors: [
    "red",
    "blue",
    "white",
    "orange",
    "green",
    "yellow",
    "pink",
    "black"
  ],
  sizes: ["S", "M", "XL", "XXL"],
  vendors: ["Malcon", "Papa", "Rocco", "JIM", "Rozetka"],
  tags: [
    "DC",
    "America",
    "Venom",
    "Spartan",
    "Coneth",
    "Thor",
    "Marvel",
    "Orlov",
    "Claus",
    "Spider",
    "Stan",
    "Evil",
    "Ash",
    "woman"
  ],
  categories: ["Marvel", "Zheka Inc", "DC"],
  items: [
    {
      id: 1,
      text: "SONIC THE HEDGEHOG BOOM8 VOL. 1 FIGURE",
      image:
        "https://cdn.shopify.com/s/files/1/2400/8099/products/sncdcfig_69bdc821-27b1-4902-aa8e-40f299a6eedc_345x345@2x.jpg?v=1557986480",
      price: 29.95,
      category: ["Marvel", "Zheka Inc"],
      vendor: "Malcon",
      size: ["S", "M", "XL", "XXL"],
      tags: ["DC", "Marvel", "America", "Venom"],
      color: ["red", "blue"]
    },
    {
      id: 2,
      text: "SONIC THE HEDGEHOG BOOM8 VOL. 3 TAILS FIGURE",
      image:
        "https://cdn.shopify.com/s/files/1/2400/8099/products/sncdcfig03_6505816c-2639-4625-b0ce-aad1d41b786e_1024x1024@2x.jpg?v=1550819040",
      price: 29.95,
      category: ["DC"],
      vendor: "Papa",
      size: ["S", "M", "XXL"],
      tags: ["DC", "Marvel", "Spartan"],
      color: ["white", "blue"]
    },
    {
      id: 3,
      text:
        "THANOS COSBABY BOBBLE-HEAD FIGURE BY HOT TOYS - MARVEL'S AVENGERS: ENDGAME",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/6103058582874?$yetidetail$",
      price: 19.95,
      category: ["Zheka Inc"],
      vendor: "Malcon",
      size: ["S", "M", "XL", "XXL"],
      tags: ["DC", "Marvel", "Coneth"],
      color: ["red", "orange"]
    },
    {
      id: 4,
      text: "SPIDER-MAN T-SHIRT FOR MEN",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/6720057110951?$yetidetail$",
      price: 24.95,
      category: ["Marvel", "Zheka Inc"],
      vendor: "Rocco",
      size: ["S", "XL", "XXL"],
      tags: ["DC", "Marvel", "Thor"],
      color: ["green", "blue"]
    },
    {
      id: 5,
      text: "MARVEL'S CAPTAIN MARVEL WOVEN TAPESTRY THROW",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/6804058932936?$yetidetail$https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/6804058932936?$yetidetail$",
      price: 39.95,
      category: ["Zheka Inc"],
      vendor: "Malcon",
      size: ["S", "M", "XL", "XXL"],
      tags: ["DC", "Marvel", "Orlov"],
      color: ["yellow", "blue"]
    },
    {
      id: 6,
      text: "MARVEL'S CAPTAIN MARVEL WATCH FOR WOMEN BY INVICTA",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/3227057501754?$yetidetail$",
      price: 314.99,
      category: ["DC", "Zheka Inc"],
      vendor: "Papa",
      size: ["S", "M", "XXL"],
      tags: ["DC", "Marvel"],
      color: ["red", "pink"]
    },
    {
      id: 7,
      text: "MARVEL'S THE AVENGERS: IRON MAN UNLEASHED VOLUME 3",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/7745055550346?$yetidetail$",
      price: 12.95,
      category: ["Marvel"],
      vendor: "Malcon",
      size: ["XL", "XXL"],
      tags: ["DC", "Marvel", "Claus"],
      color: ["red", "blue"]
    },
    {
      id: 8,
      text: "CAPTAIN AMERICA ''COOL AS ICE'' T-SHIRT FOR WOMEN",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/5623057723567?$yetidetail$",
      price: 26.95,
      category: ["Zheka Inc"],
      vendor: "Rocco",
      size: ["S", "M", "XL", "XXL"],
      tags: ["DC", "Marvel", "Spider"],
      color: ["white", "black"]
    },
    {
      id: 9,
      text: "THOR LIMITED EDITION STATUE BY SIDESHOW COLLECTIBLE",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/6811047972443?$yetidetail$",
      price: 424.0,
      category: ["DC"],
      vendor: "Malcon",
      size: ["S", "XXL"],
      tags: ["DC", "Marvel", "Stan"],
      color: ["black", "orange"]
    },
    {
      id: 10,
      text: "AVENGERS: SCARLET WITCH BOOK",
      image:
        "https://cdn-ssl.s7.shop.marvel.com/is/image/MarvelStore/7741055951513?$yetidetail$",
      price: 24.95,
      category: ["Zheka Inc"],
      vendor: "JIM",
      size: ["S", "M"],
      tags: ["DC", "Marvel", "Evil", "Ash"],
      color: ["green", "blue"]
    },
    {
      id: 11,
      text: "NECA EVIL DEAD 2 RETRO (MEGO) HERO ASH 8 CLOTHED ACTION FIGURE",
      image:
        "http://www.grt4toys.com/image/cache/data/1300h-8inch_Hero_Ash_Doll-600x600.jpg",
      price: 26.95,
      category: ["Zheka Inc", "DC"],
      vendor: "Rozetka",
      size: ["S", "XL", "XXL"],
      tags: ["DC", "Marvel", "woman"],
      color: ["red", "yellow"]
    },
    {
      id: 12,
      text: "CHILD'S PLAY 15 INCH MEGA SCALE SCARRED TALKING CHUCKY DOLL FIGURE - MEZCO 2015",
      image:
        "http://www.grt4toys.com/image/cache/data/chucky/chucky%20talking%20scarred%20mega%20scale%202015%203-600x600.jpg",
      price: 65.00,
      category: ["Marvel", "Zheka Inc"],
      vendor: "Malcon",
      size: ["M", "XL", "XXL"],
      tags: ["DC", "Marvel", "Venom"],
      color: ["red", "blue"]
    }
  ]
};

export default PRODUCTS