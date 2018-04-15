import React, { Component} from 'react';


class LyricCreate extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: ''
    }
  }

  onSubmit(event){
    //默认的提交会把html提交到后端，所以要阻止这个事件
    event.preventDefault();
    
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


export default LyricCreate;
