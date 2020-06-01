import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import "lib/theme/global.scss";
import { client } from "lib/initApolloClient";
import { useClientRect } from "lib/hooks/useClientRect";

import { UserList } from "domain/users/UserList";
import { TodosList } from "domain/todos/TodosList";
import { Text } from "components/Text";
import { Link } from "components/Link";

import "./App.module.scss";

const App = () => {
  const [ref, { x, y, width, height }] = useClientRect();

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <header className="appHeader">
          <Text as="p">hello react</Text>
          <Text as="p" ref={ref}>
            I am a paragraph at ({x}px, {y}px) position with a width of {width}
            px and height of {height}px
          </Text>
          <TodosList />
          <UserList />
          <Link
            className="appLink"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            link goes here
          </Link>
        </header>
      </div>
    </ApolloProvider>
  );
};

export default App;
