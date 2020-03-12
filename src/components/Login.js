import React, { useState } from 'react'

function Login(){
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleChange = e => {
    switch(e.target.name) {
      case "username":
        setUsername(e.target.value)
        break
      case "password":
        setPassword(e.target.value)
        break
      default:
        setUsername(username)
        setPassword(password)
    }
  }

  return(
    <div>
      <form>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="Submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
