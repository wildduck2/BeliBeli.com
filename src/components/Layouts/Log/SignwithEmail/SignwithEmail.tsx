import React, { FormEvent, MutableRefObject, useRef, useState } from "react";
import { Button, Input } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import GetDataLog from "../../../../utils/GetDataLog";
import { toast } from "react-hot-toast";
import {
  loginWithEmailHandler,
  signupWithEmailHandler,
} from "../../../../utils/Login/Login";

interface SigninWithEmailTypes {
  mainTittle: string;
  signUp: boolean;
}

interface emailSubmitHandlerTypes {
  e: FormEvent<HTMLFormElement>;
}

interface checkboxHandlerTypes {
  checkBoxRef: React.MutableRefObject<HTMLInputElement>;
  setNotchecked: (value: boolean) => void;
}

const SignwithEmail: React.FC<SigninWithEmailTypes> = ({
  mainTittle,
  signUp,
}) => {
  const router = useNavigate();

  const [fullNameValue, setFullNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailVaid, setEmailValid] = useState<boolean>(false);
  const [passowrdValue, setPassowrdValue] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passowrdConfirmValue, setPassowrdConfirmValue] = useState<string>("");
  const [passwordConfirmShown, setPasswordConfirmShown] =
    useState<boolean>(false);
  const [notChecked, setNotchecked] = useState<boolean>(false);

  const checkBoxRef = useRef() as MutableRefObject<HTMLInputElement>;

  const emailSubmitHandler = ({ e }: emailSubmitHandlerTypes) => {
    e.preventDefault();
    //() TODO: make sure the email is a valid email
    //() TODO: make sure the passoword is 7n 1upChar 1lowChar 1symobol
    //() Todo: make sure the passowrd is hashed before sending to supabase
    //() TODO: show password strength border color depending on the passowrd ruled 've been done
    //() TODO: show the confirm pass strength
    //() TODO: show a red warning if the input was not valid or empty when supmit or when you focus on an input and blur it empty
    //(ok!) TODO: pretending to send data to server now after signup show email checking layout
    if (signUp) {
      signupWithEmailHandler({
        email: emailValue,
        fullName: fullNameValue,
        password: passowrdValue,
      });
    }

    if (!signUp) {
      loginWithEmailHandler({ email: emailValue, password: passowrdValue });
    }
  };

  // checkbox handler
  const checkboxHandler = ({
    setNotchecked,
    checkBoxRef,
  }: checkboxHandlerTypes) => {
    checkBoxRef.current.checked ? setNotchecked(false) : setNotchecked(true);
  };

  return (
    <div className="log__wrapper__email">
      <h2>{mainTittle} with email address</h2>

      <form
        action="post"
        onSubmit={(e) => emailSubmitHandler({ e })}
        className={`${!signUp ? "sign-in" : "sign-up"}`}
      >
        {signUp && (
          <div>
            <Input
              className={`${fullNameValue && "active_input"}`}
              type="text"
              required
              id="text"
              value={fullNameValue}
              onChange={({ currentTarget }) =>
                setFullNameValue(currentTarget.value)
              }
            />
            <label htmlFor="text">Full Name</label>
          </div>
        )}

        <div>
          <Input
            className={twMerge(`${emailValue && "active_input"}`)}
            type="email"
            required
            id="email"
            value={emailValue}
            onBlur={() =>
              emailValue ? setEmailValid(true) : setEmailValid(false)
            }
            onChange={({ currentTarget }) => setEmailValue(currentTarget.value)}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <Input
            className={`${passowrdValue && "active_input"}`}
            type={`${!passwordShown ? "password" : "text"}`}
            required
            id="password"
            value={passowrdValue}
            onChange={({ currentTarget }) => {
              setPassowrdValue(currentTarget.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <label
            className="show_passowrd"
            onClick={() => setPasswordShown(!passwordShown)}
          >
            {passwordShown ? "Hide" : "Show"}
          </label>
        </div>

        {signUp && (
          <div>
            <Input
              className={`${passowrdConfirmValue && "active_input"}`}
              type={`${!passwordConfirmShown ? "password" : "text"}`}
              required
              id="confirm"
              value={passowrdConfirmValue}
              onChange={({ currentTarget }) =>
                setPassowrdConfirmValue(currentTarget.value)
              }
            />
            <label htmlFor="confirm">Confirm Password</label>
            <label
              className="show_passowrd"
              onClick={() => setPasswordConfirmShown(!passwordConfirmShown)}
            >
              {passwordConfirmShown ? "Hide" : "Show"}
            </label>
          </div>
        )}

        {signUp && (
          <>
            <div>
              <div
                className={`agree__container`}
                onClick={() =>
                  checkboxHandler({
                    checkBoxRef: checkBoxRef,
                    setNotchecked: setNotchecked,
                  })
                }
              >
                <Input
                  className={`agree`}
                  ref={checkBoxRef}
                  type="checkbox"
                  id="agree"
                  value={emailValue}
                  onChange={({ currentTarget }) =>
                    setEmailValue(currentTarget.value)
                  }
                />
                <label htmlFor="agree" className="relative">
                  I would like to receive exclusive deals from BeliBeli
                </label>
              </div>

              <div className="terms__container">
                <p>
                  By registering you agreed to our{" "}
                  <span className="underline">Terms & Conditions</span> and{" "}
                  <span className="underline">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </>
        )}

        {signUp ? (
          <div className="submitin_buttons">
            <Button type="submit" variant={"outline"}>
              Create Account
            </Button>
          </div>
        ) : (
          <div className="submitin_buttons">
            <Button type="submit" variant={"outline"}>
              sign in
            </Button>
            <Button
              onClick={() => {
                router("/forgotpassword");
              }}
              type="reset"
            >
              forget password
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

SignwithEmail.displayName = "SignwithEmail";

export default SignwithEmail;
