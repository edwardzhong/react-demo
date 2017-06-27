import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { test } from '../actions/testAction'
import { Link } from 'react-router-dom'

export const Home=({match,history,outputTest})=>(
  <div>
    <h2>this is Home</h2>
    <h3>param-id: {match.params.id}</h3>
    <h3>history length: {history.length}</h3>
    <ul>
      <li><Link to="/">index</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
    <button onClick={()=>outputTest()}>test</button>
  </div>
)

// function mapStateToProps(state) {
//   return {
//     // testMsg:'test'
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     outputTest:() => dispatch(test())
//   }
// }

export default connect(
  () => {return{}},
  (dispatch) => { return {outputTest:() => dispatch(test())}}
)(Home);