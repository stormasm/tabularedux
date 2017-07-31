import ReactDOM from "react-dom";
import TableFriends from "./TableFriends";
import TableFamily from "./TableFamily";
import registerServiceWorker from "./registerServiceWorker";

import React from "react";
import { Flex, Box } from "grid-styled";

const TableAll = (
  <Flex>
    <Box width={1 / 2} px={2}>
      <TableFriends />
    </Box>
    <Box width={1 / 2} px={2}>
      <TableFamily />
    </Box>
  </Flex>
);

ReactDOM.render(TableAll, document.getElementById("root"));

registerServiceWorker();
