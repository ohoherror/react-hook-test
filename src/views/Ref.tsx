import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Child } from "./Child";

export default function RefDemo() {
  const ref: any = useRef(null);

  const [placeholder, setPlaceHolder] = useState("请输入搜索内容");

  const onClick = () => {
    console.log("子组件的内容===", ref.current.value);
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="App">
      <Child ref={ref} placeholder={placeholder}></Child>
      <button onClick={onClick}>获取子组件的内容</button>
    </div>
  );
}
