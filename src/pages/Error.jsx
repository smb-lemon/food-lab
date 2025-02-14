import Wrapper from '../assets/wrapper/Error'
import React from 'react'
import { Link, useRouteError} from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if(error.status === 404){
    return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Oops!</h3>
        <p> Looks like the dish you’re craving is missing from the menu. 🍔🥗</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error