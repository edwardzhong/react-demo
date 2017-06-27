import React from 'react'
import PropTypes from 'prop-types'

// 无状态组件，不支持ref，同时必须加载react包
const Comment = ({item,removeComment,selectComment}) => (
	<li onDoubleClick={removeComment.bind(this,item.id)}
		onClick={() => selectComment(item.id)} 
		className={item.isSelect?'active':''} 
	>
		<h2>{item.name}</h2>
		<time>{item.date}</time>
		<p>{item.msg}</p>
	</li>
)

Comment.propTypes = {
  // id: PropTypes.number.isRequired,
  // isSelect: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // msg: PropTypes.string.isRequired,
  	item: PropTypes.object.isRequired,
	removeComment: PropTypes.func.isRequired,
	selectComment: PropTypes.func.isRequired
}

export default Comment