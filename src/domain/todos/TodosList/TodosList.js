import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Text } from "components/Text";

const QUERY = gql`
  query Todos($page: Int) {
    todos(page: $page, limit: 5) {
      task
      id
    }
  }
`;

const TodosList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(QUERY, {
    variables: { page: currentPage },
  });

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
      <button onClick={() => handleClick("inc")}>
        next page: {currentPage + 1}
      </button>
    </>
  );
};

export default TodosList;
