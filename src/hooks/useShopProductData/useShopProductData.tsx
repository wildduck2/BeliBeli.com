import React, { useEffect } from 'react';
import { UseShopProductDataProps } from './useShopProductData.types';
import { shoptProductSideBarNavigation } from '@/constants';

const ShopProductData = {
  sale: {
    routeText: 'Home / Sale',
    pageTilte: 'Sale',
    navigationLink: shoptProductSideBarNavigation
  }
};

const useShopProductData = ({ id }: UseShopProductDataProps) => {
  const [otherdata, setOtherData] = React.useState(ShopProductData.sale);
  const [status, setStatus] = React.useState<
    'loading' | 'succeeded' | 'failed'
  >('loading');

  useEffect(() => {
    try {
      Object.entries(ShopProductData).map(([key, value]) => {
        if (key === id) {
          setOtherData(value);
          setStatus('succeeded');
        }
      });
    } catch (error) {
      throw new Error(error as string);
    }
  }, [id]);

  return [otherdata, status] as const;
};

export default useShopProductData;
