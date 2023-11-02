import { useState } from "react";

import Link from "../../UI/Link";
import useUser from "../../../hooks/useUser/useUser";
import { supabase } from "../../../supabase/supabase";

const HeaderBanner = () => {
  const [signedout, setSignedout] = useState<boolean>(false);
  const [session, error] = useUser({ signedout });

  const userData = JSON.parse(
    localStorage.getItem("sb-ohibnvrtnlteagqbjqax-auth-token")!,
  );
  const logoutHandler = async () => {
    await supabase.auth.signOut();
    setSignedout(!signedout);
  };

  return (
    <div
      className="
          container
          mx-[auto]
          flex
          items-center
          justify-center
          gap-6
          py-2
      "
    >
      {/* here wher i will show the log out button if the user is utharized */}
      {session || userData ? (
        <>
          <Link href={"/"} onClick={() => logoutHandler()}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link href={"/signup"}>Craete An Account</Link>
          <Link href={"/login"}>Login</Link>
        </>
      )}

      <Link href={"findstore"}>Find Store</Link>
    </div>
  );
};

export default HeaderBanner;
