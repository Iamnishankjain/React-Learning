import React from 'react'

const NoPostMsg = ({getPost}) => {
  return (
    <center>
        <h1>No Post Available</h1>
        <button type="button" onClick={getPost} className="btn btn-primary btn-lg">Fetch Post</button>
    </center>
  )
}

export default NoPostMsg
