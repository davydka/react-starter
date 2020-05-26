import React, { forwardRef } from "react";

const Text = forwardRef(({ children, as: Tag = "span", ...rest }, ref) => {
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
});

export default Text;
