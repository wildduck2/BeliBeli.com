import { NavigateFunction } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import { Dispatch } from "react";

export interface RouteHandlerTypes {
  signUp: boolean;
  router: NavigateFunction;
}

export interface loginWithEmailHandlerTypes {
  email: string;
  password: string;
}

export interface signupWithEmailHandlerTypes
  extends loginWithEmailHandlerTypes {
  fullName: string;
}

export const loginWithGoogleHandler = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};

export const loginWithDiscordHandler = async () =>
  await supabase.auth.signInWithOAuth({
    provider: "discord",
  });

export const signupWithEmailHandler = async ({
  email,
  fullName,
  password,
}: signupWithEmailHandlerTypes) =>
  await supabase.auth.signUp({
    email: email,
    password: password,
  });

export const loginWithEmailHandler = async ({
  email,
  password,
}: loginWithEmailHandlerTypes) => {
  await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log("logged in");
};

export const routeHandler = ({ signUp, router }: RouteHandlerTypes) =>
  router(`${signUp ? "/login" : "/signup"}`);

export const logoutHandler = async ({
  setUser,
}: {
  setUser: Dispatch<React.SetStateAction<boolean>>;
}) => {
  await supabase.auth.signOut();
  setUser(false);
};
