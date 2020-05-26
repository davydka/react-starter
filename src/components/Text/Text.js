import React from "react";

const Text = ({ children, as: Tag = "span", ...rest }) => {
  return <Tag {...rest}>{children}</Tag>;
};

export default Text;
