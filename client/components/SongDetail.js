import React, {Component} from 'react';
import { graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong.js';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate.js';
import LyricList from './LyricList.js';

class SongDetail extends Component {
  render(){
console.log(this.props)
    const {song} = this.props.data;

    if(!song) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    //因为lyricCreate组件是在Detail中渲染的，我们想要在create组件中使用songId需要通过属性来传递给create组件，原因是react router只能把参数传递到它的最近的组件

    //
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}


//连接gql和url里面的数据
export default graphql(fetchSong, {
  options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);
