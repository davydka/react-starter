import React from "react";

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = { someState: false };
  }
  render() {
    const { href, children } = this.props;
    return (
      <a href={href} {...this.props}>
        {children}
      </a>
    );
  }
}

export default Link;
