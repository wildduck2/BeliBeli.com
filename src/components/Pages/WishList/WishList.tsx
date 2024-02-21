import React from 'react';
import { Button } from '@/components/UI';

const WishList = () => {
  return (
    <section className="wishlist">
      <h1>my favourites</h1>

      <div>
        <p>Your favourites is empty.</p>
        <Button variant="default">Go shopping</Button>
      </div>
    </section>
  );
};

export default WishList;
