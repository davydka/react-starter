import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Text } from "components/Text";

const QUERY = gql`
  query Todos($page: Int) {
    todos(page: $page, limit: 5, sort: "id", dir: "desc") {
      task
      id
    }
  }
`;

const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      task
      id
    }
  }
`;

const CreateTodo = ({ currentPage }) => {
  const [createTodo] = useMutation(CREATE_TODO, {
    update(cache, { data: { createTodo } }) {
      const cacheData = cache.readQuery({
        query: QUERY,
        variables: { page: currentPage },
      });
      cache.writeQuery({
        query: QUERY,
        variables: { page: currentPage },
        data: { todos: [createTodo].concat(cacheData.todos) },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let childNode of e.currentTarget.childNodes) {
      if (childNode.tagName === "INPUT") {
        createTodo({
          variables: {
            input: {
              user_id: 1,
              task: childNode.value,
              done: false,
            },
          },
        }).then((res) => {
          console.warn("new data here:", res);
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input />
        <button type="submit">create new todo</button>
      </form>
    </div>
  );
};

const TodosList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(QUERY, {
    variables: { page: currentPage },
  });
  const pageLimit = 11;

  const handleClick = (dir) => {
    if (dir === "inc") {
      setCurrentPage(currentPage + 1);
    }

    if (dir === "dec") {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Loading Todos List...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Text as="ul">
        {data?.todos?.map((item, index) => {
          return (
            <Text key={index + item.id} as="li">
              {item.task}
            </Text>
          );
        })}
      </Text>
      {currentPage > 1 && (
        <button onClick={() => handleClick("dec")}>
          prev page: {currentPage - 1}
        </button>
      )}
      <Text style={{ margin: "0 20px" }}>On page: {currentPage}</Text>
      {currentPage < pageLimit && (
        <button onClick={() => handleClick("inc")}>
          next page: {currentPage + 1}
        </button>
      )}
      <CreateTodo currentPage={currentPage} />
    </>
  );
};

export default TodosList;
