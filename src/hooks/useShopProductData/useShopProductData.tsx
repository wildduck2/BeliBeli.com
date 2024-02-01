import React, { useEffect } from "react";
import { UseShopProductDataProps } from "./useShopProductData.types";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";

const useShopProductData = ({ id }: UseShopProductDataProps) => {
  const products = useSelector((state: RootState) => state.data.products);

  useEffect(() => {
    products?.map((item) => {
      console.log(item);
    });
  }, [id, products]);
};

export default useShopProductData;
[
  {
    name: "Black",
    sizes: [
      {
        size: "XS",
        price: "1199.00",
        discount: null,
      },
      {
        size: "S",
        price: "1099.00",
        discount: null,
      },
      {
        size: "M",
        price: "1199.00",
        discount: null,
      },
      {
        size: "L",
        price: "1199.00",
        discount: null,
      },
      {
        size: "XL",
        price: "1199.00",
        discount: null,
      },
    ],
    art_no: "1070927013",
    low_imgs: {
      "1": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%201.png",
      "2": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%202.png",
      "3": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%203.pngu",
      "4": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%204.png",
      "5": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%205.png",
      "6": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/black%206.png",
    },
    top_imgs: {
      "1": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%201.png?t=2024-01-31T15%3A46%3A50.266Z",
      "2": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%202.png",
      "3": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%203.png",
      "4": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%204.png",
      "5": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%205.png",
      "6": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/black%206.png?t=2024-01-31T15%3A48%3A43.880Z",
    },
  },
  {
    name: "Pink",
    sizes: [
      {
        size: "XS",
        price: "749.00",
        discount: null,
      },
      {
        size: "S",
        price: "899.00",
        discount: null,
      },
    ],
    art_no: "1070927013",
    low_imgs: {
      "1": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%201.png",
      "2": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%202.png?t=2024-01-31T15%3A53%3A11.074Z",
      "3": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%203.png",
      "4": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%204.png",
      "5": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%205.png?t=2024-01-31T15%3A53%3A21.922Z",
      "6": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/Relaxed%20Fit%20Appliqued%20sweatshirt%20-%20compressed/pink%206.png",
    },
    top_imgs: {
      "1": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%201.png?t=2024-01-31T15%3A51%3A53.155Z",
      "2": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%202.png",
      "3": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%203.png",
      "4": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%204.png",
      "5": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%205.png",
      "6": "https://zpgqhogoevbgpxustvmo.supabase.co/storage/v1/object/public/produc_imgs/Men/Relaxed%20Fit%20Appliqued%20sweatshirt/pink%206.png?t=2024-01-31T15%3A52%3A16.881Z",
    },
  },
];
