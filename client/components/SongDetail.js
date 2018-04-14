import React, {Component} from 'react';
import { graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong.js';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate.js';

class SongDetail extends Component {
  render(){

    const {song} = this.props.data;

    if(!song) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate/>
      </div>
    )
  }
}


//连接gql和url里面的数据
export default graphql(fetchSong, {
  options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);
