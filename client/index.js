import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

//Apollo store可以想象成客户端存储的数据
//Apollo provider把来自Apollo store的数据传递给客户端

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider>
      <div>
        Lyrical
      </div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
