import React from 'react'

function Login(){
  return(
    <div>
      <form>
        <label>Username</label>
        <br />
        <input type="text" placeholder="Username" />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input type="password" />
        <br />
        <br />
        <button type="Submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
