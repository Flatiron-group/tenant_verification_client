import React, { useState } from 'react'


const URL = "http://localhost:3001"

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

  const handleSubmit = e => {
    e.preventDefault()
    loggingIn()
  }

  const clearForm = () => {
    setUsername("")
    setPassword("")
  }

  async function loggingIn(){
    try {
      let response = fetch(`${URL}/login`)
      let data = response.json()

      if (data.error) {
        alert("Incorrect username or password.")
        clearForm()
      } else {
        // NEED TO CHANGE THE ALERT TO A USER ACTION FROM REDUX
        alert("Successfully logged in!")
      }
    } catch(e) {
      alert("The following error occured: ", e)
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
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
