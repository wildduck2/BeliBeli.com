import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import {
  AccountDetails,
  AccountSideLinks,
  AddressBook,
  CategoryPage,
  ChangePassowrd,
  CommenicationDetails,
  EgifttsCards,
  Error,
  Home,
  MyFavouriate,
  Orders,
  ProductShow,
  Profile,
  Reviews,
  ShopProduct
} from './components/Pages';
import {
  Footer,
  Header,
  HeaderBanner,
  HeaderMenu,
  Signin,
  Signup
} from './components/Layouts';
import { HeaderNavigationLinks } from './components/UI';
import { store } from './context/store';
import { thunkFetchingBannerFromSupabase } from './context/Data';
import WishList from './components/Pages/WishList/WishList';
import Cart from './components/Pages/Cart/Cart';
import { useGetCartProducts } from './hooks';

function App() {
  useGetCartProducts();
  useEffect(() => {
    store.dispatch(thunkFetchingBannerFromSupabase());
  }, []);

  return (
    <>
      <HeaderBanner />
      <Header />
      <HeaderNavigationLinks />
      {/* <HeaderMenu /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/shop-product/:id" element={<ShopProduct />} />
        <Route path="/product-show/:id" element={<ProductShow />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/account/"
          element={
            <main className="account">
              <AccountSideLinks />
              <Outlet />
            </main>
          }
        >
          <Route path="my-account" element={<Profile />} />
          <Route path="eGift-card" element={<EgifttsCards />} />
          <Route path="orders" element={<Orders />} />
          <Route path="contact-details" element={<AccountDetails />} />
          <Route path="address-book" element={<AddressBook />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="my-favourites" element={<MyFavouriate />} />
          <Route
            path="commenication-preferences"
            element={<CommenicationDetails />}
          />
          <Route path="chage-passowrd" element={<ChangePassowrd />} />
        </Route>
        <Route path="/home/ishlist" element={<WishList />} />
        <Route path="/home/cart" element={<Cart />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
