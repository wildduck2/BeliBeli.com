import React from "react";

import { Button } from "../../../UI";
import { AiOutlineUser } from "react-icons/ai";
import { discord, google } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabase/supabase";

export interface SignInWithSocialTyps {
  mainTittle: string;
  signUp?: boolean;
}

const SignWithSocial: React.FC<SignInWithSocialTyps> = ({
  mainTittle,
  signUp,
}) => {
  const router = useNavigate();

  const loginHandler = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div
      className="
        social_sign
        w-full
        max-w-[50%]
        pl-[10%]
      "
    >
      <h2
        className="
          pb-[2rem]
          capitalize
        "
      >
        {mainTittle} with social media
      </h2>

      <Button className="social_button" onClick={loginHandler}>
        <img width={35} src={google} alt="google img" />
        <span>{mainTittle} with Google</span>
      </Button>
      <Button className="social_button">
        <img width={25} src={discord} alt="discord img" />
        <span>{mainTittle} with Discord</span>
      </Button>

      {signUp ? (
        <p>Don't have an account yet?</p>
      ) : (
        <p>Already have account ?</p>
      )}

      <Button
        className="social_button"
        onClick={() => router(`${signUp ? "/login" : "/signup"}`)}
      >
        <AiOutlineUser size={25} />
        <span>{signUp ? "Sign In" : "Sign Up"} here </span>
      </Button>
    </div>
  );
};

SignWithSocial.displayName = "SignWithSocial";

export default SignWithSocial;
