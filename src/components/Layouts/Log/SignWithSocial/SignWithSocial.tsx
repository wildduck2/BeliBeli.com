import React, { useState } from "react";

import { Button } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { RouteHandlerTypes, routeHandler } from "../../../../utils/Login/Login";

import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import { useUser } from "@supabase/auth-helpers-react";
import { useSigninwithProvider } from "@/hooks";
import { useDispatch } from "react-redux";

export interface SignInWithSocialTyps {
  mainTittle: string;
  signUp?: boolean;
  setNotValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignWithSocial: React.FC<SignInWithSocialTyps> = ({
  mainTittle,
  signUp,
  setNotValid,
}) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const Google = useSigninwithProvider({
    dispatch,
    setIsLoading,
    setEmailValid,
    setPasswordValid,
    route: router,
    provider: "google",
  });

  const GitHub = useSigninwithProvider({
    dispatch,
    setIsLoading,
    setEmailValid,
    setPasswordValid,
    route: router,
    provider: "discord",
  });

  return (
    <div className="log__wrapper__social">
      <h2>{mainTittle} with social media</h2>

      <Button
        className="social_button"
        variant={"outline"}
        onClick={Google.authProvider}
      >
        <FcGoogle size={25} />
        <span>{mainTittle} with Google</span>
      </Button>
      <Button
        className="social_button"
        variant={"outline"}
        onClick={GitHub.authProvider}
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
        onClick={() => {
          setNotValid(false);
          routeHandler({ signUp, router } as RouteHandlerTypes);
        }}
      >
        <AiOutlineUser size={25} />
        <span>{signUp ? "Sign In" : "Sign Up"} here </span>
      </Button>
    </div>
  );
};

SignWithSocial.displayName = "SignWithSocial";

export default SignWithSocial;
