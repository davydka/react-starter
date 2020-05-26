import React from "react";

import "lib/theme/global.scss";

import { useClientRect } from "lib/hooks/useClientRect";

import { Text } from "components/Text";

import "./App.module.scss";

const App = () => {
  const [ref, { x, y, width, height }] = useClientRect();

  return (
    <div className="app">
      <header className="appHeader">
        <Text as="p">hello react</Text>
        <Text as="p" ref={ref}>
          I am a paragraph at ({x}px, {y}px) position with a width of {width}
          px and height of {height}px
        </Text>
        <a
          className="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          link goes here
        </a>
      </header>
    </div>
  );
};

export default App;
