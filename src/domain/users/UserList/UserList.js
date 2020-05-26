import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Text } from "components/Text";

const QUERY = gql`
  {
    users {
      firstname
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading User List...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Text as="ul">
      {data?.users?.map((item, index) => (
        <Text key={item.firstname + index} as="li">
          {item?.firstname}
        </Text>
      ))}
    </Text>
  );
};

export default UserList;
