import React, { forwardRef, useRef, useState } from "react";

export const Child = forwardRef((props: any, ref: any) => {
  console.log("props", props);
  console.log(ref);
  return (
    <div>
      <input type="text" placeholder={props.placeholder} ref={ref} />
    </div>
  );
});
