import React, { Component} from 'react';
import gql from 'graphql-tag';

import {graphql} from 'react-apollo';


class LyricCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: ''
    }
  }
//react router只能把参数传递到它的最近的组件,我们想要在rul中取得ID
  onSubmit(event){
    //默认的提交会把html提交到后端，所以要阻止这个事件
    event.preventDefault();
    this.props.mutate({
      variables: {
        content:this.state.content,
        songId: this.props.songId
      }
      //如果mutation完成，则把输入栏清空
    }).then(() => this.setState({content: ''}));

  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label >Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
        />
      </form>
    );
  }
}
//可以通过develeptool里面的network 显示出现的错误
const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content:$content, songId: $songId){
      id
      lyrics{
        id
        content
        likes
      }
    }
  }
`;


export default graphql(mutation)(LyricCreate);
