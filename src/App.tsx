import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Error, Home } from "./components/Pages";
import {
  CategoryPage,
  Footer,
  Header,
  HeaderBanner,
  HeaderMenu,
  ShopProduct,
  Signin,
} from "./components/Layouts";
import { HeaderNavigationLinks } from "./components/UI";
import { store } from "./context/store";
import { thunkFetchingBannerFromSupabase } from "./context/Data";
import Signup from "./components/Layouts/Log/Signup/Signup";
import { supabase } from "./supabase/supabase";
import { log } from "console";

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

        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
