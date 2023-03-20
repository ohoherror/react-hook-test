import { useEffect, useState } from "react";
import { ToJson, ToString } from "../share";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const getDefault = (key: any) => {
    return localStorage.getItem(key) === null
      ? defaultValue
      : ToJson(localStorage.getItem(key));
  };

  const [state, setState] = useState(getDefault(key));

  const writeState = (value: any) => {
    localStorage.setItem(key, ToString(value));
    setState(value);
  };

  useEffect(() => {
    writeState(defaultValue || getDefault(key));
  });

  return [state, writeState];
};
