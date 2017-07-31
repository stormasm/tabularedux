import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ItemThreadList from './containers/ItemThreadList';
import TableThreadList from './containers/TableThreadList';
import configureStore from './store/configureStore';

/* Table Imports */

import TableHn from "./components/TableHn";
import TableFriends from "./components/TableFriends";
import TableFamily from "./components/TableFamily";
import TableCrud from "./components/TableCrud";
import { Flex, Box } from "grid-styled";

/* Tab Imports */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './public/stylesheets/react-tabs.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Tabs>
    <TabList>
      <Tab>TableHn</Tab>
      <Tab>MyHn</Tab>
      <Tab>TableBasic</Tab>
      <Tab>TableCrud</Tab>
      <Tab>Hn</Tab>
    </TabList>
  <TabPanel>
    <TableHn />
  </TabPanel>
  <TabPanel>
    <TableThreadList />
  </TabPanel>
  <TabPanel>
  <Flex>
    <Box width={1 / 2} px={2}>
      <TableFriends />
    </Box>
    <Box width={1 / 2} px={2}>
      <TableFamily />
    </Box>
  </Flex>
  </TabPanel>
  <TabPanel>
    <TableCrud />
  </TabPanel>
  <TabPanel>
    <ItemThreadList />
  </TabPanel>
  </Tabs>
  </Provider>,
  document.getElementById('root')
);
