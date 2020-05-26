import React from "react";

import "lib/theme/global.scss";

import { Text } from "components/Text";

import "./App.module.scss";

const App = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <Text as="p">hello react</Text>
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
