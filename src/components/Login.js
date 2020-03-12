import React from 'react'

function Login(){
  return(
    <div>
      <form>
        <label>Username<label>
        <input type="text" placeholder="Username" />
        <br />
        <label>Password</label>
        <input type="password" />
        <br />
        <button type="Submit">Sign In</button>
      </form>
    </div>
  )
}
