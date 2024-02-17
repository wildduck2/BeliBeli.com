import React from "react";
import { logo } from "@/assets";
import { Button } from "@/components/UI";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const route = useNavigate();
  return (
    <main>
      <section className="error__section" >
        <img src={logo} alt="logo img" />
        <h4>Woah, OPPSY</h4>
        <h4>This page doesn’t exist right now Maybe will exist soon!</h4>
        <Button variant="default" onClick={() => route("/")}>
          Go back
        </Button>
      </section>
    </main>
  );
};

export default Error;
