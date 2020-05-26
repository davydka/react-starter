import React, { forwardRef } from "react";
import classnames from "classnames/bind";

import styles from "./Text.module.scss";

const cx = classnames.bind(styles);

export const types = {
  HEADER_1: "HEADER_1",
  HEADER_2: "HEADER_2",
  HEADER_3: "HEADER_3",
  HEADER_4: "HEADER_4",
  HEADER_5: "HEADER_5",
  HEADER_6: "HEADER_6",
  BODY_1: "BODY_1",
  BODY_2: "BODY_2",
};

const Text = forwardRef(
  ({ as: Tag = "span", children, type = types.BODY_1, ...rest }, ref) => {
    return (
      <Tag ref={ref} className={cx(types[type])} {...rest}>
        {children}
      </Tag>
    );
  }
);

export default Text;
