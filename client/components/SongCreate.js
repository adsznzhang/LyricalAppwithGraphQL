import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link, hashHistory} from 'react-router';
import query from '../queries/fetchSongs.js';


class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = {title: ''};
  }

  onSubmit(event) {
    event.preventDefault();
    //console.log(this.props)

    this.props.mutate({
      variables:{
        title: this.state.title
      },
      //修改后，让apoll store进行数据调取
      //不能用data.refetch的原因是要在songlist组件里更新，而不是songcreate组件更新
      refetchQueries: [{
        query: query
      }]
    }).then(() =>
      //react的路由会记录下用户的浏览历史，通过hashHistory可以进行访问
      hashHistory.push('/')
    )
  };

  render () {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label >Song Title:</label>
          <input onChange={event => this.setState({title: event.target.value})} value={this.state.title}/>
        </form>
      </div>
    )
  }
}


// 如何让react组件和gql交流
//使用query variables 可以从外部注入查询参数
const mutation = gql `
mutation AddSong($title: String){
addSong(title:$title){
title
}
}
`;

export default graphql(mutation)(SongCreate);
