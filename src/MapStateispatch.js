import React from 'react'
import { connect } from 'react-redux';
import Inc from './inc';

const App = ({count,username,email}) => {
  return (
    <div>
      <center>
        Count from App Js Component : {count } <br/><hr />
        <Inc />
      </center>
    </div>
  )
}

const mapStateToProps = (state) =>({
  count : state,
  username : state.username,
  email : state.email
}
)
export default connect(mapStateToProps)(App);

// use screens inc.js, action.js, reducers.js, index.js 



