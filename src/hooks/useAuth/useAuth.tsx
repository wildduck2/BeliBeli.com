import { supabase } from "../../supabase/supabase";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { signupPopup } from "../../utils";
import { emailisnotvalid } from "@/context/Utils";
import { signin } from "@/context/Data";
import { useAuthEmailProps, useAuthProviderProps } from "./useAuth.types";

export const useSigninWithEmail = ({
  email,
  password,
  dispatch,
  setIsLoading,
  setEmailValid,
  setPasswordValid,
  route,
}: useAuthEmailProps) => {
  const [creditValidEmail, setCreditValidEmail] = useState<boolean>(false);
  const authEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(`Credentials didn't pass authentication check.`);
        dispatch(emailisnotvalid(false));
        setEmailValid(true);
        setPasswordValid(true);
        setCreditValidEmail(false);
        setIsLoading(false);
      }

      if (!error && data) {
        dispatch(signin());
        toast.success("Access granted, authentication successful.");
        dispatch(emailisnotvalid(true));
        setCreditValidEmail(true);
        setIsLoading(false);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    if (creditValidEmail) {
      route("/");
    }
  }, [creditValidEmail]);

  return { creditValidEmail, authEmail } as const;
};

export const useSigninwithProvider = ({
  dispatch,
  setIsLoading,
  setEmailValid,
  setPasswordValid,
  provider,
  route,
}: useAuthProviderProps) => {
  const [creditValidAuth, setCreditValidAuth] = useState<boolean>(false);
  const authProvider = async () => {
    setIsLoading(true);
    let log = null;

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider!,
        options: {
          skipBrowserRedirect: true,
        },
      });

      const promise = await signupPopup({
        url: data.url!,
        provider: provider!,
        key: log,
      });
      console.log(log);

      if (error) {
        dispatch(emailisnotvalid(false));
        setEmailValid(true);
        setPasswordValid(true);
        setCreditValidAuth(false);
        setIsLoading(false);
      }

      if (!error && promise) {
        dispatch(signin());
        dispatch(emailisnotvalid(true));
        setCreditValidAuth(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    // Set up an event listener for auth state changes
    const authListener = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          // Access user data from the session
          const user = session?.user;
          console.log("User data:", user);

          // Perform any additional actions with user data

          // Redirect to the desired route
          route("/");
        }
      },
    );

    return () => {
      // Remove the event listener when the component is unmounted
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  return { creditValidAuth, authProvider } as const;
};

export const useSignupWithEmail = ({
  email,
  password,
  dispatch,
  setIsLoading,
  setEmailValid,
  setPasswordValid,
  fullNameValue,
  notChecked,
  route,
}: useAuthEmailProps) => {
  const [creditValidEmail, setCreditValidEmail] = useState<boolean>(false);
  const authEmail = async (e: React.SyntheticEvent) => {
    if (notChecked) {
      e.preventDefault();
      setIsLoading(true);

      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullNameValue } },
        });

        if (error) {
          toast.error(`Credentials didn't pass authentication check.`);
          dispatch(emailisnotvalid(false));
          setEmailValid(true);
          setPasswordValid(true);
          setCreditValidEmail(false);
          setIsLoading(false);
        }

        if (!error && data) {
          dispatch(signin());
          toast.success("Access granted, authentication successful.");
          dispatch(emailisnotvalid(true));
          setCreditValidEmail(true);
          setIsLoading(false);
        }
      } catch (error) {
        throw new Error(error as string);
      }
    } else {
      toast.error(`Please accept terms and conditions.`);
    }
  };

  useEffect(() => {
    if (creditValidEmail) {
      route("/");
    }
  }, [creditValidEmail]);

  return { creditValidEmail, authEmail } as const;
};
