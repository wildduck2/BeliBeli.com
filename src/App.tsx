import { Routes, Route } from "react-router-dom";

import {
  Divided,
  Error,
  Home,
  LogIn,
  Men,
  SignUp,
  Women,
} from "./components/Pages";
import { Footer, Header, HeaderBanner } from "./components/Layouts";
import { HeaderNavigationLinks } from "./components/UI";
import { Baby, Kids } from "./components/Pages/Category";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "./supabase/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import cn from "./utils/cn";
import BeliBeliHome from "./components/Pages/Category/BeliBeliHome";

function App() {
  return (
    <>
      <HeaderBanner />
      <Header />
      <HeaderNavigationLinks />
      <Routes>
        <Route
          path="/test"
          element={
            <div
              className={cn(
                `form
                grid
                w-full
                place-content-center`,
              )}
            >
              <button>Logout</button>
              <Auth
                supabaseClient={supabase}
                providers={["google", "discord"]}
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Divided" element={<Divided />} />
        <Route path="/Baby" element={<Baby />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/BeliBeli Home" element={<BeliBeliHome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
