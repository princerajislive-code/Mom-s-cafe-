import heroImg from '../assets/images/hero_moms_dosa_1791396705871.jpg';
import aboutImg from '../assets/images/about_dosa_craft_1791396717676.jpg';
import masalaDosaImg from '../assets/images/food_masala_dosa_1791396733066.jpg';
import butterDosaImg from '../assets/images/food_butter_dosa_1791397401815.jpg';
import paneerChilliImg from '../assets/images/food_paneer_chilli_1791396744730.jpg';
import hakkaNoodlesImg from '../assets/images/food_hakka_noodles_1791397378237.jpg';
import filterCoffeeImg from '../assets/images/food_filter_coffee_1791396756392.jpg';
import masalaChaiImg from '../assets/images/food_masala_chai_1791397390556.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'South Indian' | 'Chinese' | 'Beverages';
  description: string;
  image: string;
  fallbackImage: string;
  badge?: string;
}

export const RESTAURANT_INFO = {
  name: "Mom's Cafe",
  altName: "Mom's Dosa",
  tagline: "Home Style Taste, Made with Love.",
  category: "South Indian Restaurant • Café",
  phone: "+91 78700 36217",
  phoneRaw: "917870036217",
  email: "ashish.kumarb@gmail.com",
  address: "Beside Lallu Bhai Mall, Ward No 18, Bhabua, Bihar 821101",
  shortLocation: "Beside Lallu Bhai Mall, Ward No 18, Bhabua",
  hours: "Every Day: 12:00 PM – 9:00 PM",
  hoursShort: "12:00 PM – 9:00 PM",
  services: ["Dine-in", "Delivery"],
  cuisines: ["Indian", "Chinese", "Beverages"],
  instagramUrl: "https://www.instagram.com/momscafebhabua?stkn=NzFlc2FnajJlaDZ1",
  instagramHandle: "@momscafebhabua",
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Beside+Lallu+Bhai+Mall+Ward+No+18+Bhabua+Bihar+821101",
  whatsappUrl: "https://wa.me/917870036217?text=Hi%20Mom's%20Cafe,%20I%20would%20like%20to%20place%20an%20order",
  callUrl: "tel:+917870036217",
  digitalMenuUrl: "https://moms-dosa-cafe-luxury-digital-menu-tau.vercel.app/",
  developerCredit: {
    name: "RoadsideDeveloper",
    whatsapp: "+91 7654224826",
    call: "+91 8405918172"
  }
};

export const IMAGES = {
  hero: heroImg,
  heroFallback: '/images/hero.jpg',
  about: aboutImg,
  aboutFallback: '/images/about.jpg',
  masalaDosa: masalaDosaImg,
  masalaDosaFallback: '/images/masala_dosa.jpg',
  butterDosa: butterDosaImg,
  butterDosaFallback: '/images/butter_dosa.jpg',
  paneerChilli: paneerChilliImg,
  paneerChilliFallback: '/images/chilli_paneer.jpg',
  hakkaNoodles: hakkaNoodlesImg,
  hakkaNoodlesFallback: '/images/hakka_noodles.jpg',
  filterCoffee: filterCoffeeImg,
  filterCoffeeFallback: '/images/filter_coffee.jpg',
  masalaChai: masalaChaiImg,
  masalaChaiFallback: '/images/masala_chai.jpg',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'masala-dosa',
    name: "Mom's Special Masala Dosa",
    category: 'South Indian',
    description: "Crispy golden fermented crepe stuffed with aromatic spiced potato mash, served with freshly grated coconut chutney, tangy tomato chutney and hot sambar.",
    image: masalaDosaImg,
    fallbackImage: '/images/masala_dosa.jpg',
    badge: 'Signature',
  },
  {
    id: 'butter-plain-dosa',
    name: "Crispy Butter Plain Dosa",
    category: 'South Indian',
    description: "Paper-thin, golden brown dosa roasted in pure butter for a delicate crunch, accompanied by traditional house-made accompaniments.",
    image: butterDosaImg,
    fallbackImage: '/images/butter_dosa.jpg',
  },
  {
    id: 'chilli-paneer',
    name: "Indo-Chinese Chilli Paneer",
    category: 'Chinese',
    description: "Soft fresh paneer cubes tossed in a sizzling wok with crisp bell peppers, onions, ginger, garlic, and rich savory chili glaze.",
    image: paneerChilliImg,
    fallbackImage: '/images/chilli_paneer.jpg',
    badge: 'Chef Favorite',
  },
  {
    id: 'veg-hakka-noodles',
    name: "Wok Veg Hakka Noodles",
    category: 'Chinese',
    description: "Fine noodles stir-fried on high flame with shred cabbage, carrots, bell peppers, spring onion greens, and delicate aromatic spices.",
    image: hakkaNoodlesImg,
    fallbackImage: '/images/hakka_noodles.jpg',
  },
  {
    id: 'filter-coffee',
    name: "South Indian Filter Coffee",
    category: 'Beverages',
    description: "Traditional decoction blended with steaming frothy milk, served in classic brass tumbler and dabarah for an authentic café aroma.",
    image: filterCoffeeImg,
    fallbackImage: '/images/filter_coffee.jpg',
    badge: 'House Special',
  },
  {
    id: 'masala-chai',
    name: "Aromatic Masala Chai & Beverages",
    category: 'Beverages',
    description: "Slow-brewed royal tea infused with fresh crushed ginger, cardamom pods, and premium spices, comforting in every sip.",
    image: masalaChaiImg,
    fallbackImage: '/images/masala_chai.jpg',
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Fresh Ingredients",
    description: "Hand-picked vegetables, authentic lentils, and fresh churned spices in every recipe.",
  },
  {
    title: "Homestyle Taste",
    description: "Prepared with the warmth, care, and comforting flavors of traditional home cooking.",
  },
  {
    title: "Hygienic Preparation",
    description: "Clean kitchen environment, pure filtered water, and spotless food safety standards.",
  },
  {
    title: "Fast Delivery",
    description: "Prompt, hot and securely packaged delivery directly to your doorstep in Bhabua.",
  },
];
