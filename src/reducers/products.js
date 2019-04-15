import { load } from 'redux-localstorage-simple';
import { ADD_LISTCOUNT } from "../constants";

let PRODUCTS = load({ namespace: 'product-list' });

if (!PRODUCTS || !PRODUCTS.products || !PRODUCTS.products.length) {
  PRODUCTS = {
    colors: ['red', 'blue', 'white', 'orange', 'green', 'yellow', 'pink', 'black' ],
    sizes: ['S', 'M', 'XL', 'XXL'],
    vendors: ['Malcon', 'Papa', 'Rocco', 'JIM', 'Rozetka'],
    tags: ['DC', 'Marvel', 'America', 'Venom', 'Spartan', 'Coneth', 'Thor', 'Marvel', 'Orlov', 'Claus', 'Spider', 'Stan', 'Evil', 'Ash', 'woman'], 
    categories: ['Marvel', 'Zheka Inc', 'DC'],
    items: [
      {
        id: 1,
        text: 'Venom vs Captain America',
        image: "https://instagram.fiev18-1.fna.fbcdn.net/vp/fe9d39d1f526e1fe7bbdf1348605a088/5D4731AB/t51.2885-15/sh0.08/e35/p640x640/54513898_270385350538188_5946095827465514291_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net",
        price: 100,
        category: ['Marvel', 'Zheka Inc'],
        vendor: 'Malcon',
        size: ['S', 'M', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'America', 'Venom'],
        color: ['red', 'blue']
      },
      {
        id: 2,
        text: 'Spartan',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/4f077ac20eb3b3994a250f1edbe55f15/5D4958A1/t51.2885-15/sh0.08/e35/s640x640/54800621_390885248397604_7158923835303145458_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 150,
        category: ['DC'],
        vendor: 'Papa',
        size: ['S', 'M', 'XXL'],
        tags: ['DC', 'Marvel', 'Spartan'],
        color: ['white', 'blue']
      },
      {
        id: 3,
        text: 'Coneth Games',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/82eebe9db60f0f202f82d5676cfe562e/5D42A02B/t51.2885-15/sh0.08/e35/p640x640/53685926_580809799068748_7364570924336106652_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 120,
        category: ['Zheka Inc'],
        vendor: 'Malcon',
        size: ['S', 'M', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Coneth'],
        color: ['red', 'orange']
      },
      {
        id: 4,
        text: 'Thor Arise!',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/750ca80646dcf8d37a5528ee8ef730d3/5D48537B/t51.2885-15/sh0.08/e35/p640x640/54277383_299506537350001_7047096311449899368_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 90,
        category: ['Marvel', 'Zheka Inc'],
        vendor: 'Rocco',
        size: ['S', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Thor'],
        color: ['green', 'blue']
      },
      {
        id: 5,
        text: 'Orlov Eugene',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/b78119cf1758db60e472a8b64073ce51/5D44EBD4/t51.2885-15/sh0.08/e35/p640x640/51674700_576096106227195_7213269992927113712_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 1000,
        category: ['Zheka Inc'],
        vendor: 'Malcon',
        size: ['S', 'M', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Orlov'],
        color: ['yellow', 'blue']
      },
      {
        id: 6,
        text: 'Santōryū Ōgi',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/9d36d0bfc9897e34ec9e72645631f94b/5D45B3CD/t51.2885-15/sh0.08/e35/p750x750/50895627_205576603762776_7935209154950960993_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 600,
        category: ['DC', 'Zheka Inc'],
        vendor: 'Papa',
        size: ['S', 'M', 'XXL'],
        tags: ['DC', 'Marvel'],
        color: ['red', 'pink']
      },
      {
        id: 7,
        text: 'Santa Claus',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/72c4cda07e101f3f8ad63a724ef6ea24/5D411E4B/t51.2885-15/sh0.08/e35/p750x750/49834456_150806919241581_6072020285099995724_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 124,
        category: ['Marvel'],
        vendor: 'Malcon',
        size: ['XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Claus'],
        color: ['red', 'blue']
      },
      {
        id: 8,
        text: 'Spider Verse',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/c234e0554a18675cafb003e0dcc6a82c/5D46FCDF/t51.2885-15/sh0.08/e35/p640x640/46318682_1818152291627060_8447812966279696195_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 856,
        category: ['Zheka Inc'],
        vendor: 'Rocco',
        size: ['S', 'M', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Spider'],
        color: ['white', 'black']
      },
      {
        id: 9,
        text: 'Stan Lee',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/1b3add28ad2450f25760a0cbb7079cd8/5D40E2EA/t51.2885-15/sh0.08/e35/p640x640/44381331_1549338755210680_2532484952977337160_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 264,
        category: ['DC'],
        vendor: 'Malcon',
        size: ['S', 'XXL'],
        tags: ['DC', 'Marvel', 'Stan'],
        color: ['black', 'orange']
      },
      {
        id: 10,
        text: 'Ash vs Evil Dead',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/10a0b077e31b6b71b2b72f9f608b280f/5D430668/t51.2885-15/sh0.08/e35/p640x640/43913337_251988772156514_6031262069174254069_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 642,
        category: ['Zheka Inc'],
        vendor: 'JIM',
        size: ['S', 'M'],
        tags: ['DC', 'Marvel', 'Evil', 'Ash'],
        color: ['green', 'blue']
      },
      {
        id: 11,
        text: 'Cat woman',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/782705d69fea48bc4646c5f203f9ba63/5D3C48E8/t51.2885-15/sh0.08/e35/p640x640/42411951_175875883336233_2634974853971106118_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 244,
        category: ['Zheka Inc', 'DC'],
        vendor: 'Rozetka',
        size: ['S', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'woman'],
        color: ['red', 'yellow']
      },
      {
        id: 12,
        text: 'Venom is Back!',
        image: 'https://instagram.fiev18-1.fna.fbcdn.net/vp/0c81138a0cb06e90c479427eaf5efca4/5D3098D9/t51.2885-15/sh0.08/e35/p640x640/42763656_1883124938469287_3185810440968891699_n.jpg?_nc_ht=instagram.fiev18-1.fna.fbcdn.net',
        price: 746,
        category: ['Marvel', 'Zheka Inc'],
        vendor: 'Malcon',
        size: ['M', 'XL', 'XXL'],
        tags: ['DC', 'Marvel', 'Venom'],
        color: ['red', 'blue']
      }
    ],
  }
}

const products = (state = PRODUCTS, { name, count, type }) => {
  switch (type) {    
    default:
      return state;
  }
}

export default products;
