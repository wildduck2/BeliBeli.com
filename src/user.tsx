import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import cn from "./utils/cn";

interface ProviderTypes {
  children?: React.ReactNode;
}

const Provider: React.FC<ProviderTypes> = () => {
  const router = useNavigate();

  const [user, setUser] = useState<{}>();
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  const getCurrentSession = async () => {
    const res = await supabase.auth.getSession();

    if (res && res.data.session) {
      return res.data.session;
    }

    clearUser();

    return null;
  };

  const getCurrentUser = async () => {
    if (id) return;

    const res = await supabase.auth.getUser();
    if (res && res.data.user) {
      const theUser = res.data.user;

      setUser(theUser);
      setId(theUser.id);
      setEmail(theUser.email);
      setName(theUser.identities[0].identity_data.name);
      setPicture(theUser.identities[0].identity_data.picture);
    }
  };

  useEffect(() => {
    const isUser = async () => {
      const currentSession = await getCurrentSession();
      if (currentSession) await getCurrentUser();
    };
    isUser();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    clearUser();
    router("/");
  };

  const clearUser = () => {
    setUser({});
    setId("");
    setEmail("");
    setName("");
    setPicture("");
  };
  const exposed = { user, id, email, name, picture, signOut };

  return (
    <div
      className={cn(
        `form
        grid
        w-full
        place-content-center`,
      )}
    >
      <button onClick={() => signOut()}>Logout</button>
      <Auth
        supabaseClient={supabase}
        // theme="dark"
        providers={["google", "discord"]}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default Provider;
