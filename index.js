import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedCRUDTable from './src/components/crud-redux';
import configureStore from './src/store/configureStore';
import { Flex, Box } from "grid-styled";

const store = configureStore();

ReactDOM.render(
 <Provider store={store}>
 <Flex>
   <Box width={1 / 2} px={2}>
   <ConnectedCRUDTable />,
   </Box>
 </Flex>
  </Provider>,
  document.getElementById('root')
);
