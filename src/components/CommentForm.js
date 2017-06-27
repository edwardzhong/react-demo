import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gif from '../imgs/superme.gif';

export default class CommentForm extends Component{
    handleSubmit(event){
      let name=this.refs.name.value,
          msg=this.refs.msg.value;

      this.props.addComment({
        id:Math.round(Math.random()*10000),
        name:name,
        msg:msg,
        isSelect:false,
        date:new Date().toUTCString()
      });
    }

    handleImgClick(event){
      alert('you are click me now!');
    }

    componentDidMount(){
      let self=this;
      document.addEventListener('keypress',function(event){//添加键盘事件
        if(event.keyCode=='13'){
          self.handleSubmit();
        }
      },false);
    }

  render(){
    const { inputState,addComment,removeComments,setEnable} = this.props
    return (
      <div className="form">
        <h1>Crowdbotics</h1>
        <p>click the image below</p>
        <img onClick={this.handleImgClick} src={gif} alt="superme" title="click me" /><br/>
        <label htmlFor="name">name</label>
        <input type="text" id="name" className="name" ref="name" defaultValue="Jeff"  />
        <label htmlFor="msg">message</label>
        <input type="text" id="msg" className="msg" ref="msg" defaultValue="Hello There !" />
        <label htmlFor="isEnable">button enable</label>
        <input type="checkbox" id="isEnable" 
          checked={inputState?true:false} 
          onChange={(e) => setEnable(e)} />
        <button className="btn" 
          disabled={inputState?false:true}
          onClick={(e) => this.handleSubmit(e)} >submit</button>
        <button className="btn" 
          disabled={inputState?false:true}
          onClick={(e) => removeComments(e)} >delete</button>
      </div>
    )
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  removeComments: PropTypes.func.isRequired,
  setEnable: PropTypes.func.isRequired,
  inputState: PropTypes.bool.isRequired
}