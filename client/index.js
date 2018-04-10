import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import App from './components/App.js';
import SongCreate from './components/SongCreate.js';
import SongList from './components/SongList.js';
import SongDetail from './components/SongDetail.js';

//Apollo store可以想象成客户端存储的数据
//Apollo provider把来自Apollo store的数据传递给客户端

const client = new ApolloClient({});


//在URL里面定义参数id songs/:id
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate}/>
          <Route path="songs/:id" component={SongDetail}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
