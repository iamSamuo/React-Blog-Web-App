import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound= ()=> {
    return (
        <div>
          <h3> Sorry </h3>
          <p>The page you tried to search is not found...</p>
          <Link to = "/"> Go back to Home</Link>
        </div>     
    )
}

export default PageNotFound
