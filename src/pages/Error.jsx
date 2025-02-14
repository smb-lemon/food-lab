import Wrapper from '../assets/wrapper/Error'
import React from 'react'
import { Link, useRouteError} from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if(error.status === 404){
    return (
    <div>
      <div>
        <img src={img} alt="not found" />
        <h3>Oops!</h3>
        <p> Looks like the dish you’re craving is missing from the menu. 🍔🥗</p>
        <Link to='/'>back home</Link>
      </div>
    </div>
    )
  }
  
  return (
    <div>
      <div>
        <h3>something went wrong</h3>
      </div>
    </div>
  )
}

export default Error