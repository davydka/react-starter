import React from "react";

import { Text, types as textTypes } from "components/Text";

export default {
  title: "Text",
};

export const text_types = () => {
  return (
    <>
      <Text as="h1" type={textTypes.HEADER_1}>
        Heading 1
      </Text>
      <Text as="h2" type={textTypes.HEADER_2}>
        Heading 2
      </Text>
      <Text as="h3" type={textTypes.HEADER_3}>
        Heading 3
      </Text>
      <Text as="h4" type={textTypes.HEADER_4}>
        Heading 4
      </Text>
      <Text as="h5" type={textTypes.HEADER_5}>
        Heading 5
      </Text>
      <Text as="h6" type={textTypes.HEADER_6}>
        Heading 6
      </Text>
      <Text as="p" type={textTypes.BODY_1}>
        Body 1
      </Text>
      <Text as="p" type={textTypes.BODY_2}>
        Body 2
      </Text>
    </>
  );
};
