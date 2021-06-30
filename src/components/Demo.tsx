import React from "react";
import { HvButton } from "@hv/uikit-react-core"
import { Button } from "@material-ui/core";


interface Props {
}


export const Demo: React.FC<Props> = () => {
  const lol = 1;
  var times = 4;
  const onClick = () => {
    if (times > 3) {
      var greeting = "say Hello instead";
    }
    alert(greeting)
  };
  const onClick2 = () => {
    alert(lol)
  };

  return (
    <>
      {/* <HvButton /> */}
      {/* <Button /> */}
      <button
        onClick={onClick}
      >btn</button>
      <button
        onClick={onClick2}
      >btn</button>
    </>
  );
}


export default Demo;