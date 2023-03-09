import React from 'react'
import {connect} from 'react-redux';
import {increase,decrease} from './action';

const inc = ({count,increase,decrease}) => {
  return (
    <div>
        Count From Inc Component : {count} <br /><br />
        <button onClick={() => increase()}>Increment</button> &nbsp;&nbsp;
        <button onClick={() => decrease()}>decrease</button>
    </div>
  )
}

const mapStateToProps = (state) =>({
    count : state
}
)

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatchong plain actions
        increase: () => dispatch({ type : 'INCREMENT'}),
        decrease: () => dispatch({ type : 'DECREMENT'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(inc);