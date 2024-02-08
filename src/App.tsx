import React, { useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import {
    CategoryPage,
    Error,
    Home,
    Profile,
    ShopProduct,
} from "./components/Pages";
import {
    Footer,
    Header,
    HeaderBanner,
    HeaderMenu,
    Signin,
} from "./components/Layouts";
import { HeaderNavigationLinks } from "./components/UI";
import { store } from "./context/store";
import { thunkFetchingBannerFromSupabase } from "./context/Data";
import Signup from "./components/Layouts/Log/Signup/Signup";
import AccountSideLinks from "./components/Layouts/AccountSideLinks/AccountSideLinks";

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
                    <Route path="eGift-card" element={<h2>hi form eGifts card</h2>} />
                    <Route path="orders" element={<h2>hi form orders</h2>} />
                    <Route path="orders" element={<h2>hi form orders</h2>} />
                    <Route path="orders" element={<h2>hi form orders</h2>} />
                    <Route path="orders" element={<h2>hi form orders</h2>} />
                </Route>

                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
