import React ,{ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'
import * as commentAction from '../actions/commentAction'
import * as inputAction from '../actions/inputAction'
import * as requestAction from '../actions/requestAction'

export class CommentApp extends Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
  	const { list, inputState,addComment,removeComments,setEnable,selectComment,removeComment} = this.props
    return (
      <div>
    		<CommentForm {...this.props} />
    		<CommentList list={list} selectComment={selectComment} removeComment={removeComment} />
      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    list: state.list,
    inputState:state.inputState,
    requestList:state.requestList
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(commentAction.addComment(comment)),
    removeComment: (key) => dispatch(commentAction.removeComment(key)),
    selectComment: (key) => dispatch(commentAction.selectComment(key)),
    removeComments: () => dispatch(commentAction.removeComments()),
    setEnable: () => dispatch(inputAction.setEnable()),
    requestPosts:() => dispatch(requestAction.requestPosts()),
    receivePosts:(json) => dispatch(requestAction.receivePosts(json)),
    requestError:(err) => dispatch(requestAction.requestError(err))
  }
  // return {
  // 	actions:bindActionCreators(comActions,dispatch)
  // }
}

// Connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentApp);
