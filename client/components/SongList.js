import React, {Component} from 'react';
//把graphql query翻译成js
import gql from 'graphql-tag';
//是react和apollo 之间的胶水
import {graphql} from 'react-apollo';

//用类模式来创建组件是想要获得更多的内建方法
class SongList extends Component {
  render(){
    //可能会有两个输出，一个是没有query数据前的组件渲染，一个是得到query后的组件属性渲染
    console.log(this.props);


    return(
      <div>
        SongList
      </div>
    );
  }
}

const query = gql`
  {
    songs{
      title
    }
  }
`;

//graphql()返回一个函数并把SongList当作参数执行,把query返回的数据加载到组件的props对象上面，可以通过consol.log(this.props)来查看下
export default graphql(query)(SongList);

