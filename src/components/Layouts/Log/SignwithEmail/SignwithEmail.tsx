import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Input } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { onChangeInput, onPasswordShow } from "@/utils";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import { BsPatchExclamation } from "react-icons/bs";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { passwordrules } from "@/constants";
import { GiPlainCircle } from "react-icons/gi";
import { useSigninWithEmail, useSignupWithEmail } from "@/hooks";

interface SigninWithEmailTypes {
  mainTittle: string;
  signUp: boolean;
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

  const [passowrdConfirmValue, setPassowrdConfirmValue] = useState<string>("");
  const [passwordConfirmShown, setPasswordConfirmShown] =
    useState<boolean>(false);
  const [notChecked, setNotchecked] = useState<boolean>(false);

  const checkBoxRef = useRef() as MutableRefObject<HTMLInputElement>;

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
  const [passwordcomfirmationValid, setPasswordcomfirmationValid] =
    useState<boolean>(false);
  const [passwordcomfirmation, setPasswordcomfirmation] = useState<string>("");
  const [passwordcomfirmationShow, setPasswordcomfirmationShow] =
    useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordcomfirmationRef = useRef<HTMLInputElement>(null);

  const { creditValidEmail, authEmail } = useSigninWithEmail({
    email,
    password,
    dispatch,
    setIsLoading,
    setEmailValid,
    setPasswordValid,
    route: router,
  });

  useEffect(() => {
    setNotValid(
      utils.inputsValid.email && utils.inputsValid.password ? true : false,
    );
  }, [dispatch, emailValid, passwordValid, passwordShowMenu, creditValidEmail]);

  const signupProvider = useSignupWithEmail({
    notChecked,
    email,
    password,
    fullNameValue,
    dispatch,
    setIsLoading,
    route: router,
    setEmailValid,
    setPasswordValid,
  });

  const signinProvider = useSigninWithEmail({
    email,
    password,
    dispatch,
    setIsLoading,
    route: router,
    setEmailValid,
    setPasswordValid,
  });

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

      <form action="post" onSubmit={authEmail}>
        {signUp && (
          <div className="input__wrapper">
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
        <p className={!emailValid ? "hide" : "active"}>Email is not valid.</p>
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
          className={`password-rules ${passwordShowMenu ? "active" : "hide"} `}
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

        {signUp && (
          <>
            <div className="input__wrapper">
              <Input
                className={`${passwordcomfirmation && "active_input"}`}
                type={`${!passwordConfirmShown ? "password" : "text"}`}
                required
                id="confirm"
                value={passwordcomfirmation}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                onChange={(e) => {
                  onChangeInput({
                    e,
                    password,
                    passwordconf: passwordcomfirmation,
                    setFunc: setPasswordcomfirmation,
                    setvalid: setPasswordcomfirmationValid,
                    setvalidcomf: setPasswordValid,
                    type: "passwordcomfirmation",
                    utils,
                    dispatch,
                  });
                }}
                disabled={isLoading}
                ref={passwordcomfirmationRef}
              />
              <label htmlFor="confirm">Confirm Password</label>
              <label
                className="show_passowrd"
                onClick={() =>
                  onPasswordShow({
                    setFunc: setPasswordcomfirmationShow,
                    passwordRef: passwordcomfirmationRef,
                    passwordShow: passwordcomfirmationShow,
                  })
                }
              >
                {passwordcomfirmationShow ? <RiEyeLine /> : <RiEyeOffLine />}
              </label>
              <div className="valid">
                {passwordcomfirmationValid && (
                  <BsPatchExclamation className="wrong" />
                )}
              </div>
            </div>

            <p className={!passwordcomfirmationValid ? "hide" : "active"}>
              Comfirm passowrd is not valid.
            </p>
          </>
        )}

        {signUp && (
          <>
            <div className="input__wrapper">
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
                  value={email}
                  onChange={({ currentTarget }) =>
                    setEmail(currentTarget.value)
                  }
                />
                <label htmlFor="agree" className="agree__label">
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
            <Button
              type="submit"
              variant={"outline"}
              onClick={signupProvider.authEmail}
            >
              Create Account
            </Button>
          </div>
        ) : (
          <div className="submitin_buttons">
            <Button
              type="submit"
              variant={"outline"}
              onClick={signinProvider.authEmail}
            >
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
