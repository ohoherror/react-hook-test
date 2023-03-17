import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Child } from "./Child";
import { Wrapper } from "../hooks/refHook";

export default function RefDemo() {
  const myRef: any = useRef(null);
  const onGetInfo = () => {
    console.log(myRef);
    myRef.current.focus();
  };

  return (
    <div>
      {/* <B name={name} ref={ref}></B> */}
      <Wrapper ref={myRef}></Wrapper>
      <button onClick={onGetInfo}>dianjihuoqu</button>
    </div>
  );
}

const A = (props: any) => {
  console.log("ref", props.ref);
  return <p></p>;
  //   return <></>;
};

const B = forwardRef((props: any, ref: any) => {
  console.log(ref);
  // console.log(props);
  return (
    <>
      {/* <input type="text" placeholder={props.placeholder} ref={ref} /> */}
      <div ref={ref}>
        <A></A>
      </div>
    </>
  );
});
