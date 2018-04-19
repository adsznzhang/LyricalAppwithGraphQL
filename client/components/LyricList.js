import React, { Component} from 'react';



class LyricList extends Component {


  onLike(id){
    console.log(id);
  }


  renderLyrics(){
    //你可以在songdetail组件里看到lyrics是通过属性传递给了lyriclist组件，然后我们通过map函数来进行遍历


    //有一个非常重要的一点是，当你submit  lyrics后，这个表单并不会马上更新，就是把fetchsong 赋值一个唯一的id,当然你也可以使用和songcreate里面的refetchqueries函数来重新获取数据来解决这个问题！
    return this.props.lyrics.map(({id, content}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
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
