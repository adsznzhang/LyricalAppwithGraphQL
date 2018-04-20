import React, { Component} from 'react';
import { graphql} from 'react-apollo';
import gql from 'graphql-tag';



class LyricList extends Component {


  onLike(id){
    this.props.mutate({variables:{id:id}});
  }


  renderLyrics(){
    //你可以在songdetail组件里看到lyrics是通过属性传递给了lyriclist组件，然后我们通过map函数来进行遍历


    //有一个非常重要的一点是，当你submit  lyrics后，这个表单并不会马上更新，就是把fetchsong 赋值一个唯一的id,当然你也可以使用和songcreate里面的refetchqueries函数来重新获取数据来解决这个问题！
    return this.props.lyrics.map(({id, content,likes}) => {
      //你可能会发现likes并不会重新渲染，原因是我们在fetchsong的时候并没有返回likes属性
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
            {likes}
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        <ul className="collection">
          {this.renderLyrics()}
        </ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id:$id){
      id
      likes
    }
  }
`

export default graphql(mutation)(LyricList);
