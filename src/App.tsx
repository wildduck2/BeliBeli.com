import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { CategoryPage, Error, Home, ShopProduct } from "./components/Pages";
import {
  AccountSideLinks,
  EgifttsCards,
  Footer,
  Header,
  HeaderBanner,
  HeaderMenu,
  Signin,
  Signup,
  Orders,
  Profile,
  AccountDetails,
  AddressBook,
  Reviews,
  MyFavouriate,
  CommenicationDetails,
  ChangePassowrd,
} from "./components/Layouts";
import { HeaderNavigationLinks } from "./components/UI";
import { store } from "./context/store";
import { thunkFetchingBannerFromSupabase } from "./context/Data";

function App() {
  useEffect(() => {
    store.dispatch(thunkFetchingBannerFromSupabase());
  }, []);

  return (
    <>
      <HeaderBanner />
      <Header />
      <HeaderNavigationLinks />
      <HeaderMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/produc-show/:id" element={<ShopProduct />} />
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
          <Route path="commenication-preferences" element={<CommenicationDetails />} />
          <Route path="chage-passowrd" element={<ChangePassowrd />} />
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
