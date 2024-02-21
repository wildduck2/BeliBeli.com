import { Button } from '@/components/UI';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyFavouriate = () => {
  const route = useNavigate();
  return (
    <div className="account__favourites">
      <h1>My Favourites</h1>
      <div>
        {
          <>
            <p>Your favourites is empty.</p>
            <Button variant="default" onClick={() => route('/')}>
              Go shopping
            </Button>
          </>
        }
      </div>
    </div>
  );
};

export default MyFavouriate;
