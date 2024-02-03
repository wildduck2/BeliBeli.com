import React, { useState } from "react";

import SignWithSocial from "./SignWithSocial";
import SignwithEmail from "./SignwithEmail";

interface LogTypes {
  mainTittle: string;
  signUp: boolean;
}

const Log: React.FC<LogTypes> = ({ mainTittle, signUp }) => {
  return (
    <section className="log">
      <h2>{mainTittle}</h2>

      <div className="log__wrapper">
        <SignwithEmail mainTittle={mainTittle} signUp={signUp} />

        <SignWithSocial mainTittle={mainTittle} signUp={signUp} />
      </div>
    </section>
  );
};

Log.displayName = "Log";

export default Log;
