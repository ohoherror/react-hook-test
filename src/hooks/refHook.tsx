import React, { forwardRef, memo, useRef, useState } from "react";

const Content = (props: any) => {
  return <input ref={props.forwardRef}></input>;
};

export const Wrapper = forwardRef((props, ref) => {
  const ContentWarp = memo(Content);
  return <ContentWarp {...props} forwardRef={ref}></ContentWarp>;
});
