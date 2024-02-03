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
// import { discord, google } from "../../../../assets";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
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
    <div className="log__wrapper__social">
      <h2>{mainTittle} with social media</h2>

      <Button
        className="social_button"
        variant={"outline"}
        onClick={() => {
          loginWithGoogleHandler({
            user_id: `${data?.identities![0].user_id}`,
            file: data?.identities![0].identity_data!.avatar_url,
          });
        }}
      >
        <FcGoogle size={25} />
        <span>{mainTittle} with Google</span>
      </Button>
      <Button
        className="social_button"
        variant={"outline"}
        onClick={loginWithDiscordHandler}
      >
        <BsDiscord size={25} />
        <span>{mainTittle} with Discord</span>
      </Button>

      {signUp ? (
        <p>Don't have an account yet?</p>
      ) : (
        <p>Already have account ?</p>
      )}

      <Button
        className="social_button"
        variant={"outline"}
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
