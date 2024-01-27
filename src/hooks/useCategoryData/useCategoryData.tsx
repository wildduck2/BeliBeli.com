import React, { useEffect, useState } from "react";
import { UseCategoryDataProps } from "./useCategoryData.types";
import {
  BlackBannerWomen,
  MenSideBarNavigation,
  RedBannerWomen,
  WoemnSideBarNavigation,
} from "@/constants";
import { CategoryPageTypes } from "@/components/Layouts/CategoryPage/CategoryPage.types";

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

export const categoryData = {
  women: {
    routeText: "Home /Women",
    pageTile: "Women",
    navigationLink: WoemnSideBarNavigation,
    discrptionData: WomenDiscriptionData,
    bannerIndexes: [0, 6],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
  men: {
    routeText: "Home /Men",
    pageTile: "Men",
    navigationLink: MenSideBarNavigation,
    discrptionData: MenDiscriptionData,
    bannerIndexes: [5, 2],
    redBannerWomen: RedBannerWomen,
    blackBannerWomen: BlackBannerWomen,
  },
};

const useCategoryData = ({ id }: UseCategoryDataProps) => {
  const [data, setData] = useState<CategoryPageTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "succeeded" | "failed">(
    "loading",
  );

  const categoryDataEntries = Object.entries(categoryData);

  useEffect(() => {
    setStatus("loading");
    setData(null);
    setError(null);

    for (let i = 0; i < categoryDataEntries.length; i++) {
      const [key, value] = categoryDataEntries[i];
      try {
        if (key === id) {
          setData(value);
          setError(null);
          setStatus("succeeded");
          break;
        } else {
          setData(null);
          setError("Data not found");
          setStatus("failed");
        }
      } catch (error) {
        throw new Error(error as string);
      }
    }
  }, [id]);

  return { data, error, status } as const;
};

export default useCategoryData;
