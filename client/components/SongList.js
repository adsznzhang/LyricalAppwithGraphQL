import React, {Component} from 'react';
//把graphql query翻译成js
import gql from 'graphql-tag';
//是react和apollo 之间的胶水
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

//用类模式来创建组件是想要获得更多的内建方法
class SongList extends Component {

  renderSongs(){
    //这个地方的map可能会出错，原因是query要花一定的时间来返回数据，返回之前songs是没有东西的！
    //别忘了每一个react的列表需要key,这个地方我们用song的id
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }



  render(){
    //可能会有两个输出，一个是没有query数据前的组件渲染，一个是得到query后的组件属性渲染
 console.log(this.props);

    //如果query没有完成，就渲染下面的组件
    if(this.props.data.loading){return <div>
      Loading...
    </div>}

    return(
      <div>
      <ul className="collection">
        {this.renderSongs()}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs{
      id
      title
    }
  }
`;

//graphql()返回一个函数并把SongList当作参数执行,把query返回的数据加载到组件的props对象上面，可以通过consol.log(this.props)来查看下
export default graphql(query)(SongList);

