import React, { Component} from 'react';



class LyricList extends Component {
  renderLyrics(){
    //你可以在songdetail组件里看到lyrics是通过属性传递给了lyriclist组件，然后我们通过map函数来进行遍历


    //有一个非常重要的一点是，当你submit  lyrics后，这个表单并不会马上更新，
    return this.props.lyrics.map(({id, content}) => {
      return (
        <li key={id} className="collection-item">
        {content}
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

export default LyricList;
