

"use client";

import { Provider } from "react-redux";
import store from "./store";
// import { useEffect } from "react";
// import { setCart } from "./actions";

export default function ReduxProvider({ children }) {
  // useEffect(() => {
  //   const saved = localStorage.getItem("cart");
  //   if (saved) {
  //     store.dispatch(setCart(JSON.parse(saved)));
  //   }
  // }, []);

  return <Provider store={store}>{children}</Provider>;
}

