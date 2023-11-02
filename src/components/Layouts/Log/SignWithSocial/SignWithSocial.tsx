import React from "react";

import { Button } from "../../../UI";
import { useNavigate } from "react-router-dom";
import {
  RouteHandlerTypes,
  loginWithDiscordHandler,
  loginWithGoogleHandler,
  routeHandler,
} from "../../../../utils/Login/Login";

import { AiOutlineUser } from "react-icons/ai";
import { discord, google } from "../../../../assets";
import { useUser } from "@supabase/auth-helpers-react";

export interface SignInWithSocialTyps {
  mainTittle: string;
  signUp?: boolean;
}

const SignWithSocial: React.FC<SignInWithSocialTyps> = ({
  mainTittle,
  signUp,
}) => {
  const router = useNavigate();

  const data = useUser();

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

      <Button
        className="social_button"
        onClick={() => {
          loginWithGoogleHandler({
            user_id: `${data?.identities![0].user_id}`,
            file: data?.identities![0].identity_data!.avatar_url,
          });
        }}
      >
        <img width={35} src={google} alt="google img" />
        <span>{mainTittle} with Google</span>
      </Button>
      <Button className="social_button" onClick={loginWithDiscordHandler}>
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
        onClick={() => routeHandler({ signUp, router } as RouteHandlerTypes)}
      >
        <AiOutlineUser size={25} />
        <span>{signUp ? "Sign In" : "Sign Up"} here </span>
      </Button>
    </div>
  );
};

SignWithSocial.displayName = "SignWithSocial";

export default SignWithSocial;

// ipan cib
