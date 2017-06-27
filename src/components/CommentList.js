import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

// 无状态组件，不支持ref，同时必须加载react包
const CommentList =({list,removeComment,selectComment})=>(
	<ul>
	{
		list.map((item,index) => <Comment key={item.id} item={item} removeComment={removeComment} selectComment={selectComment} /> )
	}
	</ul>
)

CommentList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
	  id: PropTypes.number.isRequired,
	  isSelect: PropTypes.bool.isRequired,
	  name: PropTypes.string.isRequired,
	  msg: PropTypes.string.isRequired,
	  date: PropTypes.string.isRequired
  }).isRequired).isRequired,
  removeComment: PropTypes.func.isRequired,
  selectComment: PropTypes.func.isRequired
}

export default CommentList