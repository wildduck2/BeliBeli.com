import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@/components/UI";
import { passwordrules } from "@/constants";
import { RootState } from "@/context/store";
import { onChangeInput, onPasswordShow } from "@/utils";
import { BsPatchExclamation } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Icons } from "../Icons";
import SignWithSocial from "../SignWithSocial";
import { useDispatch, useSelector } from "react-redux";
import { useSigninWithEmail } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const router = useNavigate();

  const utils = useSelector((state: RootState) => state.util);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notValid, setNotValid] = useState<boolean>(false);

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [passwordShowMenu, setPasswordShowMenu] = useState<boolean>(false);
  const [passwordHasLowercase, setPasswordHasLowercase] =
    useState<boolean>(false);
  const [passwordHasUppercase, setPasswordHasUppercase] =
    useState<boolean>(false);
  const [passwordHasNumber, setPasswordHasNumber] = useState<boolean>(false);
  const [passwordHasSpecialCharacter, setPasswordHasSpecialCharacter] =
    useState<boolean>(false);
  const [passwordInRange, setPasswordInRange] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log("notValid", notValid);

  useEffect(() => {
    setNotValid(
      utils.inputsValid.email && utils.inputsValid.password ? true : false,
    );
  }, [dispatch, emailValid, passwordValid, passwordShowMenu]);

  const SigninProvider = useSigninWithEmail({
    email,
    password,
    dispatch,
    setIsLoading,
    setEmailValid,
    setPasswordValid,
    route: router,
  });

  return (
    <section className="log">
      <h2>Signin</h2>

      <div className="log__wrapper">
        <div className="log__wrapper__email">
          <h2>{"sign in"} with email address</h2>

          <form action="post" onSubmit={SigninProvider.authEmail}>
            <div className="input__wrapper">
              <Input
                className={`${email && "active_input"}`}
                type="email"
                required
                id="email"
                value={email}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                onChange={(e) => {
                  onChangeInput({
                    e,
                    setFunc: setEmail,
                    setvalid: setEmailValid,
                    type: "email",
                    utils,
                    dispatch,
                  });
                }}
                ref={emailRef}
              />
              <label htmlFor="email">Email</label>
              <div className="valid">
                {emailValid && <BsPatchExclamation className="wrong" />}
              </div>
            </div>
            <p className={!emailValid ? "hide" : "active"}>
              Email is not valid.
            </p>
            <div className="input__wrapper">
              <Input
                className={`${password && "active_input"}`}
                id="password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                required
                value={password}
                onChange={(e) => {
                  onChangeInput({
                    e,
                    setFunc: setPassword,
                    setvalid: setPasswordValid,
                    password: password,
                    setPasswordShowMenu,
                    setPasswordHasLowercase,
                    setPasswordHasNumber,
                    setPasswordHasSpecialCharacter,
                    setPasswordHasUppercase,
                    setPasswordInRange,
                    type: "password",
                    utils,
                    dispatch,
                  });
                }}
                disabled={isLoading}
                ref={passwordRef}
                onFocus={() => {
                  setPasswordShowMenu(true);
                }}
              />
              <label htmlFor="password">Password</label>
              <label
                className="show_passowrd"
                onClick={() =>
                  onPasswordShow({
                    setFunc: setPasswordShow,
                    passwordRef,
                    passwordShow,
                  })
                }
              >
                {passwordShow ? <RiEyeLine /> : <RiEyeOffLine />}
              </label>

              <div className="valid">
                {passwordValid && <BsPatchExclamation className="wrong" />}
              </div>
            </div>
            <p className={!passwordValid ? "hide" : "active"}>
              Password is not valid.
            </p>
            <div
              className={`password-rules ${
                passwordShowMenu ? "active" : "hide"
              } `}
            >
              <ul>
                {passwordrules.map((rule) => (
                  <li key={rule.id}>
                    <GiPlainCircle
                      className={`${passwordValid && "red"}  
                  ${passwordHasLowercase && rule.id === 1 && "green"}
                  ${passwordHasUppercase && rule.id === 2 && "green"}
                  ${passwordHasNumber && rule.id === 3 && "green"}
                  ${passwordHasSpecialCharacter && rule.id === 4 && "green"}
                  ${passwordInRange && rule.id === 5 && "green"}
                  `}
                    />
                    <span>{rule.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="submitin_buttons">
              <Button
                type="submit"
                variant={"outline"}
                className="animate-spin"
                disabled={isLoading || !notValid}
              >
                {isLoading && <Icons.spinner />}
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
          </form>
        </div>

        <SignWithSocial
          mainTittle={"Sign in"}
          signUp={false}
          setNotValid={setNotValid}
        />
      </div>
    </section>
  );
};

export default Signin;
