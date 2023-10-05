import React, { ReactNode } from "react";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      containerStyle={{
        color: "#fff",
      }}
    />
  );
};

export default ToastProvider;
