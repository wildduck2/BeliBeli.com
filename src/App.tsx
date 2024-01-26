import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Error, Home } from "./components/Pages";
import {
  CategoryPage,
  Footer,
  Header,
  HeaderBanner,
  HeaderMenu,
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
        {/* <Route path="/produc-show/:id" element={<CategoryPage />} /> */}
        {/* <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />  */}

        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
