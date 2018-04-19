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

//添加一个配置来让apoll看到具体id 数据的变化从而重新渲染组件
const client = new ApolloClient({
  //所有apollo里面的数据都会通过这个函数来添加一个属性,让apollo来鉴别不同数据
  //可以去dev.apollodata.com/react/cache-updates.html看官方文档
  dataIdFromObject: o => o.id
});


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
