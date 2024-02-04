import React from "react";

import Link from "../../UI/Link";
import { supabase } from "../../../supabase/supabase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { signout } from "@/context/Data";

const HeaderBanner = () => {
  const logged = useSelector((state: RootState) => state.data.logged);
  const dispatch = useDispatch();
  return (
    <div className="banner">
      {/* here wher i will show the log out button if the user is utharized */}
      {logged ? (
        <>
          <Link
            className="banner__link"
            href={"/"}
            onClick={() => {
              supabase.auth.signOut();
              dispatch(signout());
            }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="banner__link" href={"/signup"}>
            Craete An Account
          </Link>
          <Link className="banner__link" href={"/login"}>
            Login
          </Link>
        </>
      )}

      <Link className="banner__link" href={"findstore"}>
        Find Store
      </Link>
    </div>
  );
};

export default HeaderBanner;
