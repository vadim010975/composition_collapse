import React from "react";
import { FC } from "react";

const Content: FC<{ expandedLabel: boolean, children?: React.ReactNode }> = ({ children, expandedLabel }) => {

  return (
    <div className={expandedLabel ? "content show" : "content"}>
      { children }
    </div>
  );
}

export default Content;