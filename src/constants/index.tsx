import React from "react";
import { z } from "zod";

export const emailSchema = z.string().email();
export const passwordInRange = z.string().min(8).max(32);
export const passwordhasuppercase = z.string().regex(/(?=.*[A-Z])/);
export const passwordhaslowercase = z.string().regex(/(?=.*[a-z])/);
export const passwordhasnumber = z.string().regex(/(?=.*\d)/);
export const passwordhasspecialcharacter = z.string().regex(/(?=.*[@$!%*?&])/);

export const Emails = [
  "ahmed@example.com",
  "ayob@example.com",
  "abdo@example.com",
  "ali@example.com",
  "mohamed@example.com",
];

export const passwordrules = [
  {
    id: 1,
    name: "Lowercase letter",
  },
  {
    id: 2,
    name: "Uppercase letter",
  },
  {
    id: 3,
    name: "Number",
  },
  {
    id: 4,
    name: "Special character (e.g. !?<>@#$%)",
  },
  {
    id: 5,
    name: "Minimum 8 characters",
  },
];

export const navigationLinks = [
  "category/Women",
  "category/Men",
  "category/Divided",
  "category/Baby",
  "category/Kids",
  "category/BeliBeliHome",
  "category/Sport",
  "shop-product/Sale",
  "specials/Sustainability",
];

export const RedBannerHome = {
  ColorfulBanner: "red",
  title: "3 for 2 on all sale items",
  description: "Offer valid on selected items until 25.01.2024",
  subtitle: ["Up to 70% off", "Online only"],
  Links: ["Women", "Divided", "Men", "Kids", "BeliBeli Home"],
};

export const BlackBannerHome = {
  ColorfulBanner: "black",
  title: "Last chance to buy!",
  description: null,
  subtitle: ["Get your favourites — for less"],
  Links: ["Women", "Divided", "Men", "Kids", "BeliBeli Home"],
};

export const RedBannerWomen = {
  ColorfulBanner: "red",
  title: "3 for 2 on all sale items",
  description: "Offer valid on selected items until 25.01.2024",
  subtitle: ["Up to 70% off", "Online only"],
  Links: ["Women", "Divided", "Men", "Kids", "BeliBeli Home"],
};

export const BlackBannerWomen = {
  ColorfulBanner: "black",
  title: "Last chance to buy!",
  description: null,
  subtitle: ["Get your favourites — for less"],
  Links: ["Women", "Divided", "Men", "Kids", "BeliBeli Home"],
};

export const FilterLinks = [
  "Women",
  "Men",
  "Divided",
  "Kids",
  "Baby",
  "BeliBeli Home",
  "Sale",
];

export const WomenHeaderNavigationLink = [
  "women",
  [
    [
      "New Arrivals",
      ["View All", "Clothes", "Shoes & Accessories", "Sportswear"],
    ],
    [
      "Offers And Highlights",
      ["Bestsellers From EGP 299", "Shirts & Blouses Under EGP 1199"],
    ],
    [
      "Trending Now",
      [
        "A/W 2023",
        "Romance",
        "New Season In Denim",
        "City Chic",
        "Modern Utility",
      ],
    ],
    [
      "Shop By Product",
      [
        "View All",
        "Dresses",
        "Tops",
        "Shirts & Blouses",
        "Sweatshirts & Hoodies",
        "Swimwear & Beachwear",
        "Trousers",
        "Jeans",
        "Jumpsuits & Playsuits",
        "Skirts",
        "Shoes",
        "Accessories",
        "Bags",
        "Blazers",
        "Jackets & Coats",
        "Cardigans & Jumpers",
        "Basics",
        "Lingerie",
        "Loungewear",
        "Nightwear",
        "Socks & Tights",
        "Sportswear",
        "Beauty",
        "Premium Selection",
        "Maternity Wear",
        "Plus Sizes",
      ],
    ],
    [["Shop By Occasion", ["Going Out", "Office Wear", "Wedding"]], "Magazine"],
  ],
];
export const MenHeaderNavigationLink = [
  "men",
  [
    [
      "New Arrivals",
      ["View All", "Clothes", "Shoes & Accessories", "Sportswear"],
    ],
    ["Autumn Lookbook", ["Casual Looks", "Smart Looks", "Street Looks"]],

    [
      "Offers And Highlights",
      ["Shoes From EGP 649", "Men Sportswear From EGP 399", "Bestsellers"],
    ],
    ["Trending Now", ["Music Movies & Logos"]],
    [
      "Shop By Product",
      [
        "View All",
        "T-Shirts & Tanks",
        "Shirts",
        "Hoodies & Sweatshirts",
        "Swimwear",
        "Shorts",
        "Trousers",
        "Jeans",
        "Suits & Blazers",
        "Jackets & Coats",
        "Shoes",
        "Accessories",
        "Cardigans & Jumpers",
        "Knitwear",
        "Basics",
        "Sportswear",
        "Underwear",
        "Socks",
        "Premium Selection",
        "Nightwear & Loungewear",
      ],
    ],
    ["Shop By Occasion", ["Going Out", "Office Wear", "Wedding"]],
    "Magazine",
  ],
];
export const DividedHeaderNavigationLink = [
  "divided",
  [
    [
      "New Arrivals",
      ["View All", "Clothes", "Shoes & Accessories", "Sportswear"],
    ],
    ["Autumn Lookbook", ["Casual Looks", "Smart Looks", "Street Looks"]],
    [["Offers And Highlights"], ["New Season Basics From EGP 99"]],
    [
      "Trending Now",
      [
        "90s Minimalist",
        "Hyper Feminine",
        "Licenses",
        "Powered By Denim",
        "A/W 2023",
      ],
    ],
    [
      "Shop By Product",
      [
        "View All",
        "Dresses",
        "Tops",
        "Shirts & Blouses",
        "Hoodies & Sweatshirts",
        "Swimwear",
        "Trousers & Leggings",
        "Jeans",
        "Jumpsuits & Rompers",
        "Skirts",
        "Shoes",
        "Accessories",
        "Cardigans & Jumpers",
        "Jackets & Coats",
        "Basics",
        "Underwear & Pyjamas",
      ],
    ],
  ],
];
export const BabayHeaderNavigationLink = [
  "baby",
  [
    [
      "Newborn",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes & Slippers",
        "Accessories",
        "Outdoor & Fleece",
      ],
    ],
    [
      "Baby Girls",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
      ],
    ],
    [
      "Baby Boys",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
      ],
    ],
    [
      "Shop By Product",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outerwear",
      ],
    ],
    ["Popular Now", ["Character Shop", "Basics And Multipacks"]],
  ],
];
export const KidsHeaderNavigationLink = [
  "kids",
  [
    [
      "Popular Now",
      ["Halloween", "Back To School", "Lakwena X BeliBeli", "Character Shop"],
    ],
    [
      "Offers And Highlights",
      [
        "25% Off On Kids Essential",
        "3 For 2 On Basics",
        "Best Sellers Starting From EGP 149",
        "Multipacks From EGP299",
        "Hoodies Under EGP1099",
      ],
    ],
    [
      "Girls 2-8Y",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outerwear",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
        "Sportswear",
      ],
    ],
    [
      "Boys 2-8Y",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress",
        "Sportswear",
      ],
    ],
    [
      "Girls 9-14Y",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress",
        "Sportswear",
      ],
    ],
    [
      "Boys 9-14Y",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Sportswear",
      ],
    ],
    [
      "Shop By Product",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Accessories",
        "Outerwear",
        "Fancy Dress Costumes",
        "Sportswear",
      ],
    ],
  ],
];
export const BeliBeliHomeHeaderNavigationLink = [
  "belibeli home",
  [
    ["New Arrivals", ["View All", "Clothes", "New Home & Interior Products"]],
    [
      "Shop By Room",
      ["Living Room", "Bedroom", "Bathroom", "Kitchen", "Kids Room"],
    ],
    ["Trending Now", ["Home Essentials", "Current Crush", "Fall 2023"]],
    [
      "Shop By Product",
      [
        "View All",
        "Vases & Decorations",
        "Cushions & Cushion Covers",
        "Bed Linen",
        "Storage & Organizing",
        "Dinnerware & Tableware",
        "Cookware & Bakeware",
        "Towels & Bathroom Accessories",
        "Blankets",
        "Curtains",
        "Rugs",
        "Homewear & Pyjamas",
        "Toys",
        "Giftwrap",
        "Care Products",
        "Furniture",
        "Lighting",
      ],
    ],
    ["Shop By Concept", ["Premium Selection"]],
  ],
];
export const SportsHeaderNavigationLink = [
  "sports",
  [
    [
      "Women",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Active Swimwear",
        "Outerwear",
        "Accessories And Equipment",
        "Plus Size",
        "Maternity",
      ],
    ],
    [
      "Men",
      [
        "View All",
        "New Arrivals",
        "Clothing",
        "Outerwear",
        "Accessories And Equipment",
      ],
    ],
    [
      "Kids",
      [
        "View All",
        "New Arrivals",
        "Girl's Clothing",
        "Boy's Clothing",
        "Sport Accessories",
      ],
    ],
    [
      "Inspiration & Guides",
      ["Tights Guide", "Bra Guide", "The Shorts Guide", "The T-Shirt Guide"],
    ],
  ],
];
export const SaleHeaderNavigationLink = [
  "sale",
  [
    [
      "Women",
      [
        "Women",
        "Dresses",
        "Tops",
        "Trousers",
        "Blazers & Waistcoats",
        "Beauty",
        "Cardigans & Jumpers",
        "Hoodies & Sweatshirts",
        "Knitwear",
        "Shoes",
        "Shirts & Blouses",
        "Swimwear",
        "Jeans",
        "Skirts",
        "Shorts",
        "Jumpsuits",
        "Premium Selection",
        "H&M+ Plus Sizes",
        "Maternity Wear",
        "Accessories",
        "Basics",
        "Loungewear",
        "Sportswear",
        "Lingerie",
        "Socks & Tights",
      ],
    ],
    [
      "Divided",
      [
        "Dresses",
        "Shirts & Blouses",
        "Tops & Blouses",
        "Hoodies & Sweatshirts",
        "Cardigans & Jumpers",
        "Coats & Jackets",
        "Skirts",
        "Jeans Trousers & Tights",
        "Jumpsuits & Rompers",
        "Jeans",
        "Shoes",
        "Accessories",
        "Swimwear",
        "Underwear & Nightwear",
      ],
    ],
    [
      "Men",
      [
        "Last Chance To Buy",
        "Hoodies & Sweatshirts",
        "Tops & T-Shirts",
        "Shirts",
        "Jeans & Trousers",
        "Shorts & Swimwear",
        "Cardigans & Jumpers",
        "Jackets & Coats",
        "Blazers & Suits",
        "Underwear & Nightwear",
        "Accessories",
        "Sportswear",
        "Socks",
        "Knitwear",
        "Premium Selection",
      ],
    ],
    [
      "Kids",
      [
        "Last Chance To Buy",
        "Newborn",
        "Baby Girl 4-24 Months",
        "Baby Boy 4-24 Months",
        "Girls 2-8 Y",
        "Boys 2-8 Y",
        "Girls 9-14 Y",
        "Boys 9-14 Y",
      ],
    ],
    [
      "H&M Home",
      [
        "Living Room",
        "Bathroom",
        "Kitchen",
        "Kids Room",
        "Storage",
        "Furniture",
        "Cushion Covers",
      ],
    ],
    ["Sport", ["Women", "Men", "Kids"]],
  ],
];
export const SustainabilityHeaderNavigationLink = [
  "sustainability",
  [
    [
      "Our Work",
      [
        "The Latest",
        "Let's Innovate",
        "Let's Be Fair",
        "Let's Be For All",
        "Let's Clean Up",
        "Let's Close The Loop",
      ],
    ],
    ["Our Products", ["Women", "Divided", "Kids", "Baby", "Men", "H&M HOME"]],
    [
      "H&M Take Care",
      ["Repair Remake And Refresh", "Wash", "Care", "Care Products"],
    ],
    [
      "Our Commitment",
      [
        "H&M Group Sustainability Strategy",
        "H&M Group Sustainability Report",
        "H&M Foundation",
      ],
    ],
  ],
];

export const WoemnSideBarNavigation = [
  [
    [
      [
        "New Arrivals",
        "Clothes",
        "Shoes & Accessories",
        "Swimwear",
        "Sportswear",
      ],
      [
        "Offers And Highlights",
        "Bestsellers From EGP 299",
        "Shirts & Blouses Under EGP 1199",
      ],
      [
        "Trending Now",
        "A/W 2023",
        "Romance",
        "New Season In Denim",
        "City Chic",
        "Modern Utility",
      ],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "Dresses",
        "Tops",
        "Shirts & Blouses",
        "Sweatshirts & Hoodies",
        "Cardigans & Jumpers",
        "Jackets & Coats",
        "Trousers",
        "Jeans",
        "Jumpsuits & Playsuits",
        "Skirts",
        "Blazers",
        "Shoes",
        "Accessories",
        "Swimwear & Beachwear",
        "Shorts",
        "Lingerie",
        "Nightwear",
        "Socks & Tights",
        "Sportswear",
        "Beauty",
        "Premium Selection",
        "Maternity Wear",
        "Plus Sizes",
        "Care Products",
      ],
    ],
  ],

  [
    [
      ["Shop By Occasion", "Going Out", "Office Wear"],
      ["Magazine", "Magazine"],
    ],
  ],
];
export const MenSideBarNavigation = [
  [
    [
      ["New Arrivals", "Clothes", "Shoes & Accessories", "Sportswear"],
      ["Autumn Lookbook", "Smart Looks", "Casual Looks", "Street Looks"],
      ["Offers And Highlights", "Shoes From EGP 649", "Bestsellers"],
      ["Trending Now", "A/W 2023", "Music Movies & Logos"],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "T-Shirts & Tanks",
        "Shirts",
        "Hoodies & Sweatshirts",
        "Swimwear",
        "Shorts",
        "Trousers",
        "Jeans",
        "Suits & Blazers",
        "Jackets & Coats",
        "Shoes",
        "Accessories",
        "Cardigans & Jumpers",
        "Knitwear",
        "Basics",
        "Sportswear",
        "Underwear",
        "Socks",
        "Premium Selection",
        "Nightwear & Loungewear",
        "Care Products",
      ],
    ],
  ],
];
export const DividedSideBarNavigation = [
  [
    [
      ["New Arrivals", "Clothes", "Shoes & Accessories"],
      ["Offers And Highlights", "New Season Basics From EGP 99"],

      [
        "Trending Now",
        "A/W 2023",
        "90s Minimalist",
        "Hyper Feminine",
        "Licenses",
        "Powered By Denim",
      ],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "Dresses",
        "Tops",
        "Shirts & Blouses",
        "Hoodies & Sweatshirts",
        "Swimwear",
        "Trousers & Leggings",
        "Jumpsuits & Rompers",
        "Skirts",
        "Shoes",
        "Accessories",
        "Jackets & Coats",
        "Basics",
        "Underwear & Pyjamas",
        "Care Products",
      ],
    ],
  ],
];
export const BabySideBarNavigation = [
  [[["Popular Now", "Character Shop", "Basics And Multipacks"]]],
  [
    [
      [
        "Newborn",
        "New Arrivals",
        "Clothing",
        "Shoes & Slippers",
        "Accessories",
        "Outdoor & Fleece",
      ],
    ],
  ],
  [
    [
      [
        "Baby Girls",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
      ],
    ],
  ],
  [
    [
      [
        "Baby Boys",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
      ],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outerwear",
        "Rompers",
        "Fancy Dress Costumes",
      ],
    ],
  ],
];
export const kidsSideBarNavigation = [
  [
    [
      [
        "Popular Now",
        "Halloween",
        "Back To School",
        "Character Shop",
        "Autumn Styles 2-8y",
        "Autumn Styles 9-14y",
      ],

      [
        "Offers And Highlights",
        "Best Sellers Starting From EGP 149",
        "Multipacks From EGP299",
        "Hoodies Under EGP1099",
      ],
    ],
  ],
  [
    [
      [
        "Girls 2-8Y",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
        "Sportswear",
      ],

      [
        "Boys 2-8Y",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
        "Sportswear",
      ],
    ],
  ],
  [
    [
      [
        "Girls 9-14Y",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
        "Sportswear",
      ],

      [
        "Boys 9-14Y",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outdoor & Fleece",
        "Fancy Dress Costumes",
        "Sportswear",
      ],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "New Arrivals",
        "Clothing",
        "Shoes",
        "Accessories",
        "Outerwear",
        "Rompers",
        "Fancy Dress Costumes",
      ],
    ],
  ],
];
export const BeliBeliHomeSideBarNavigation = [
  [
    [
      ["New Arrivals", "New Home & Interior Products"],

      [
        "Shop By Room",
        "Living Room",
        "Bedroom",
        "Bathroom",
        "Kitchen",
        "Kids Room",
      ],

      [
        "Offers And Highlights",
        "3 For 2 On Selected Home Decor",
        "3for2 On Bath Essential",
        "Bestsellers",
      ],
      ["Trending Now", "Home Essentials"],
    ],
  ],
  [
    [
      [
        "Shop By Product",
        "Vases & Decorations",
        "Cushions & Cushion Covers",
        "Bed Linen",
        "Storage & Organizing",
        "Dinnerware & Tableware",
        "Cookware & Bakeware",
        "Towels & Bathroom Accessories",
        "Blankets",
        "Curtains",
        "Rugs",
        "Homewear & Pyjamas",
        "Toys",
        "Giftwrap",
        "Care Products",
        "Furniture",
        "Lighting",
      ],
    ],
  ],
  [[["Shop By Concept", "Premium Selection"]]],
];
export const SportsSideBarNavigation = [
  [
    [
      [
        "Women",
        "New Arrivals",
        "Clothing",
        "Outerwear",
        "Accessories And Equipment",
        "Maternity",
      ],
    ],
  ],

  [
    [
      [
        "Men",
        "New Arrivals",
        "Clothing",
        "Outerwear",
        "Accessories And Equipment",
      ],
    ],
  ],

  [
    [
      [
        "Kids",
        "New Arrivals",
        "Girl's Clothing",
        "Boy's Clothing",
        "Sport Accessories",
      ],
    ],
  ],

  [
    [
      [
        " Inspiration & Guides",
        " Tights Guide",
        " Bra Guide",
        "The Shorts Guide",
        "The T-Shirt Guide",
      ],
    ],
  ],
];
export const SaleSideBarNavigation = [
  [
    [
      [
        "Women",
        "Dresses",
        "Tops",
        "Trousers",
        "Blazers & Waistcoats",
        "Beauty",
        "Jackets & Coats",
        "Cardigans & Jumpers",
        "Hoodies & Sweatshirts",
        "Knitwear",
        "Shoes",
        "Shirts & Blouses",
        "Swimwear",
        "Jeans",
        "Skirts",
        "Shorts",
        "Jumpsuits",
        "Premium Selection",
        "H&M+ Plus Sizes",
        "Maternity Wear",
        "Accessories",
        "Basics",
        "Nightwear",
        "Loungewear",
        "Sportswear",
        "Lingerie",
      ],
    ],
  ],
  [
    [
      [
        "Divided",
        "Dresses",
        "Shirts & Blouses",
        "Tops & Blouses",
        "Basics",
        "Hoodies & Sweatshirts",
        "Cardigans & Jumpers",
        "Coats & Jackets",
        "Skirts",
        "Shorts & Skirts",
        "Jeans Trousers & Tights",
        "Jumpsuits & Rompers",
        "Jeans",
        "Shoes",
        "Swimwear",
        "Underwear & Nightwear",
      ],
    ],
  ],
  [
    [
      [
        "Men",
        "Last chance to buy",
        "Hoodies & Sweatshirts",
        "Tops & T-shirts",
        "Shirts",
        "Jeans & Trousers",
        "Cardigans & Jumpers",
        "Shoes",
        "Jackets & Coats",
        "Blazers & Suits",
        "Accessories",
        "Sportswear",
        "Socks",
        "Knitwear",
        "Premium Selection",
      ],
    ],
  ],
  [
    [
      [
        "Kids",
        "Last Chance To Buy",
        "Newborn",
        "Baby Girl 4-24 Months",
        "Baby Boy 4-24 Months",
        "Girls 2-8 Y",
        "Boys 2-8 Y",
        "Girls 9-14 Y",
        "Boys 9-14 Y",
      ],
    ],
    [
      [
        "BeliBeli Home",
        "Living Room",
        "Bathroom",
        "Kitchen",
        "Kids Room",
        "Furniture",
        "Cushion Covers",
      ],
    ],
    [["Sport", "Women", "Men", "Kids"]],
  ],
];
export const SustainabilitySideBarNavigation = [
  [
    [
      [
        "Our Work",
        "The Latest",
        "Let's Innovate",
        "Let's Be Fair",
        "Let's Be For All",
        "Let's Clean Up",
        "Let's Close The Loop",
      ],
    ],
  ],
  [[["Our Products", "Women", "Divided", "Kids", "Baby", "Men", "H&M HOME"]]],
  [
    [
      [
        "H&M Take Care",
        "Repair Remake And Refresh",
        "Wash",
        "Care",
        "Care Products",
      ],
    ],
  ],
  [
    [
      [
        "Our Commitment",
        "H&M Group Sustainability Strategy",
        "H&M Group Sustainability Report",
        "H&M Foundation",
      ],
    ],
  ],
];

export const magazine = [
  {
    img: "/src/assets/imgs/magazine/1.webp",
    title: "The moment for dressy menswear is now",
  },
  {
    img: "/src/assets/imgs/magazine/2.webp",
    title: "Top Men’s Jeans: Styling Ideas",
  },
  {
    img: "/src/assets/imgs/magazine/3.webp",
    title: "AUTUMN ’23 MENSWEAR TRENDS",
  },
];

export const footerData = [
  [
    "SHOP",
    "Women",
    "Men",
    "Divided",
    "Baby",
    "Kids",
    "H&M Home",
    "Sport",
    "Sale",
    "Sustainability",
  ],
  [
    "CORPORATE INFO",
    "About Us",
    "Delivery Information",
    "Terms and Conditions of Sale",
    "Website Terms & Conditions",
    "Privacy Policy",
    "Returns & Refunds",
  ],
  [
    "CUSTOMER SERVICE",
    "FAQs",
    "Contact Us",
    "Connect Via WhatsApp",
    "Sitemap",
    "Stores",
    "H&M Home Furniture & Lighting",
    "eGift Cards",
  ],
];

export const Daels = [
  "Free delivery on all orders above EGP 699",
  "Free returns available online and in store",
  "Click & Collect available on all items",
];

export const shoptProductSideBarNavigation = {
  Women: [
    "Last Chance To Buy",
    "Dresses",
    "Tops",
    "Trousers",
    "Blazers & Waistcoats",
    "Beauty",
    "Jackets & Coats",
    "Cardigans & Jumpers",
    "Hoodies & Sweatshirts",
    "Knitwear",
    "Shoes",
    "Shirts & Blouses",
    "Swimwear",
    "Jeans",
    "Skirts",
    "Shorts",
    "Jumpsuits",
    "Premium Selection",
    "H&M Plus Sizes",
    "Maternity Wear",
    "Accessories",
    "Basics",
    "Nightwear",
    "Loungewear",
    "Sportswear",
    "Lingerie",
  ],
  Divided: [
    "Last Chance To Buy",
    "Dresses",
    "Shirts & Blouses",
    "Tops & Blouses",
    "Basics",
    "Hoodies & Sweatshirts",
    "Cardigans & Jumpers",
    "Coats & Jackets",
    "Skirts",
    "Shorts & Skirts",
    "Jeans Trousers & Tights",
    "Jumpsuits & Rompers",
    "Jeans",
    "Shoes",
    "Swimwear",
    "Underwear & Nightwear",
  ],
  Men: [
    "Last chance to buy",
    "Hoodies & Sweatshirts",
    "Tops & T-shirts",
    "Shirts",
    "Jeans & Trousers",
    "Cardigans & Jumpers",
    "Shoes",
    "Jackets & Coats",
    "Blazers & Suits",
    "Accessories",
    "Sportswear",
    "Socks",
    "Knitwear",
    "Premium Selection",
  ],
  Kids: [
    "Best prices from EGP99",
    "Last Chance To Buy",
    "Newborn",
    "Baby Girl 4-24 Months",
    "Baby Boy 4-24 Months",
    "Girls 2-8 Y",
    "Boys 2-8 Y",
    "Girls 9-14 Y",
    "Boys 9-14 Y",
    "Kids sport",
    "Kids room",
  ],
  Baby: ["Newborn", "Baby girl", "Baby boy"],
  "H&M Home": [
    "Last chance to buy",
    "Living Room",
    "Bathroom",
    "Kitchen",
    "Kids Room",
    "Furniture",
    "Cushion Covers",
  ],
  Sport: ["Women", "Men", "Kids"],
};

export const categoryData = [
  {
    routeText: "Home /Women",
    pageTile: "Women",
    navigationLink: WoemnSideBarNavigation,
    bannerIndexes: [0, 11],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home /Men",
    pageTile: "Men",
    navigationLink: MenSideBarNavigation,
    bannerIndexes: [6, 13],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home /Divided",
    pageTile: "Divided",
    navigationLink: DividedSideBarNavigation,
    bannerIndexes: [5, 2],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home / Baby",
    pageTile: "Baby",
    navigationLink: BabySideBarNavigation,
    bannerIndexes: [9],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home / Kids",
    pageTile: "Kids",
    navigationLink: kidsSideBarNavigation,
    bannerIndexes: [8, 1],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home / BeliBeli Home",
    pageTile: "BeliBeli Home",
    navigationLink: BeliBeliHomeSideBarNavigation,
    bannerIndexes: [10, 4],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  {
    routeText: "Home / Sport",
    pageTile: "Sport",
    navigationLink: SportsSideBarNavigation,
    bannerIndexes: [7, 12],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
];

export const WomenDiscriptionData = {
  1: {
    title: <h4>Shop Women’s Clothing At BeliBeli</h4>,
    disc: [
      <>
        <p>
          As one of the world’s leading shopping destinations, BeliBeli has
          everything any fashion-forward women needs in her closet. At BeliBeli
          shop the latest women’s clothing and fashion products, ranging from
          shoes and accessories, gym wear, beauty, and more. Refresh your
          wardrobe with exclusive pieces from our clothing collection. Shop
          casual women’s wear and grab your next go-to fashion staples like
          basic tees, your next favorite pair of jeans, and enhance your makeup
          and skincare routines with some beauty essentials.
        </p>
        <p>
          With thousands of styles to choose from, shopping at BeliBeli couldn’t
          be easier. Whether you are looking to make a fashion statement with
          the latest contemporary pieces, looking for loungewear for a cozy
          night in, or working up a sweat at the gym, BeliBeli’s edit includes
          the key pieces you need in your wardrobe. With our assortment of
          minimalistic pieces and exclusive collections, which includes
          everything from chic, flowy spring must-haves to consciously curated
          chic silhouettes, you are certain to find everything you desire. Check
          out Conscious collection for extravagant yet sustainable garments.
          BeliBeli UAE offers women’s fashion in a more sustainable way.
        </p>
      </>,
    ],
  },
  2: {
    title: <h4>A Tailor-Made Shopping Experience</h4>,
    disc: [
      <>
        <p>
          To make your shopping experience a breeze, our various categories
          allow you to shop by offers, product, edits, and concept, depending on
          the event or look you are going for. For more refined, classic pieces,
          why not browse our Modern Classic and Trend line.
        </p>
        <p>
          Shop our versatile BeliBeli+ Plus size range of women’s clothing and
          get your wardrobe ready. We have a diverse collection of plus-size
          basics, trousers, dresses, and sportswear. Browse our latest on-trend
          plus size dresses ranging from shirt dresses, wrap dresses, and LBD’s
          and discover your next outfit.
        </p>
        <p>
          Love a good deal? If so, BeliBeli has you covered. Shop our offers
          category and discover hundreds of affordable styles on sale! Whether
          you need a new outfit, or wardrobe revamp you won’t feel guilty after
          getting your shopping fix. Aside from clothing offers, highlight any
          off-duty outfit with our assorted selection of shoes and accessories.
          With delicate jewelry, hair accessories, and bags BeliBeli’s range is
          sure to make any outfit pop. Check out our offers on a wardrobe
          staple, denim, and add a timeless, iconic flair to your look.
          High-waisted, skinny, mom jeans, boyfriend jeans, denim jackets, you
          name it!
        </p>
        <p>
          Fancy a lie-in? Sleep tight in our range of delicate and comfortable
          women’s nightwear. Ranging from classic pajamas to matching sets for a
          lazy weekend, you’ll be sure to find your essentials in our ladies’
          sleepwear range. Choose from a range of materials to keep you
          comfortable, from soft, smooth silk, cool and crisp cotton, or cozy
          flannel. Why not also browse our range of lingerie for all your
          lingerie needs. Grab some everyday essential underwear with our
          multipacks or shop some of our more delicate pieces to boost your
          confidence, from bodysuits and more.
        </p>
        <p>
          Shop women’s apparel online at BeliBeli UAE and explore an array of
          styles. Shop with us and discover why BeliBeli is your one-stop shop
          for online shopping for women and don't forget to
          <span>download BeliBeli app </span>for a better shopping experience.
        </p>
      </>,
    ],
  },
};

export const MenDiscriptionData = {
  1: {
    title: <h4>Men’s Fashion at BeliBeli</h4>,
    disc: [
      <>
        <p>
          Discover men’s clothing for the freshest fashion trends right here at
          BeliBeli Egypt. Whether you are looking for everyday casual wear or
          garments to throw on for the office, our men’s fashion will keep every
          man looking his absolute best. Shop our classic yet modern menswear
          collection to keep each piece in your wardrobe timeless. We’ve got a
          wide selection of men’s apparel, ranging from everyday staples like
          t-shirts, hoodies, trousers and jeans, to tailored blazers and suits.
        </p>
        <p>
          Update your shoe collection with BeliBeli’s array of shoes, ideal to
          take you anywhere from the beach to the gym and everywhere in between.
          Look out for the selection of this seasons styles from trainers,
          sneakers, boots, and many more for whatever the occasion. Sneakers not
          your thing? Check out our range of derby shoes, loafers and oxford
          shoes to compliment your formal attire.
        </p>
        <p>
          Create your perfect summer wardrobe with BeliBeli’s latest edit and
          grab some men’s summer essentials. Whether you’re chilling by the pool
          or hitting a beach festival, dive into our men’s selection of
          swimwear. Stay cool in cotton t-shirts, linen shorts and browse
          through our latest edit. It’s all in the details - Shop BeliBeli for
          the best selection of men’s accessories, from elevated essentials to
          cool graphics, we have it all. Check out our men’s underwear, fun
          graphic socks, jewellery, bags and seasonal sunglasses to boost any
          outfit. Why not scroll through our men’s new arrivals to grab more of
          the good stuff.
        </p>
      </>,
    ],
  },
  2: {
    title: <h4>Styles for any Occasion </h4>,
    disc: [
      <>
        <p>
          If your outerwear needs a refresh, browse through our collection of
          jackets, coats and long sleeve tops for winter layering to basic tees
          and vests and everything in between. BeliBeli’s collection of men’s
          clothes has all your seasonal needs covered. Why not have fun with
          your style with one of our graphic hoodies and sweatshirts. Whether
          you’re representing your favourite sports team, band or movie we’ve
          got the printed hoodies you need to express your style. Or check out
          our range of t-shirts and jersey tops to pair with a biker jacket and
          your favourite go-to jeans for an effortless street style look.
        </p>
        <p>
          If you want to look fresh while breaking a sweat, we have the perfect
          collection of sportswear for your fitness needs. Shop our range of
          running shorts, joggers, tights and padded jackets for your daily
          outdoor workout. Or make the most out of the athleisure trend and rock
          these styles daily for the ultimate street style. Pair these looks
          with our versatile range of sneakers and trainers for even the most
          high-impact workouts.
        </p>
        <p>
          At BeliBeli we recognize they every man wants to look stylish. Stay
          tuned for our weekly drops of on trend styles and keep an eye out for
          amazing deals on men’s clothing. We guarantee that you will find what
          you’re looking for here at BeliBeli Egypt!
        </p>
      </>,
    ],
  },
};

export const categoryDiscriptionData = {
  women: WomenDiscriptionData,
  men: MenDiscriptionData,
  divided: MenDiscriptionData,
  kids: MenDiscriptionData,
  belibelihome: MenDiscriptionData,
  baby: MenDiscriptionData,
  sport: MenDiscriptionData,
};
