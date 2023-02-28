import React from 'react'

const Dashboard = ({match}) => {
  return (
    <div>
        <center>
            <h4>Displaying Dashboard Page Content</h4>
            <h3>Dashboard Profile Name is : {matchMedia.params.name}</h3>
        </center>
    </div>
  )
}

export default Dashboard