import React, { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClimbingBoxLoader";
const Loading = () => {
  const override = css`
    display: block;
    height: 100vh;
    margin: auto auto;
    border-color: red;
  `;

  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        margin={5}
        size={20}
        color={"#2d92ff"}
        loading={true}
      />
    </div>
  );
};

export default Loading;
