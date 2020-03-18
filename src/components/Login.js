import React, { useState } from 'react'


const URL = "http://localhost:3001"

function Login(){
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleChange = e => {
    switch(e.target.name) {
      case "email":
        setEmail(e.target.value)
        break
      case "password":
        setPassword(e.target.value)
        break
      default:
        setEmail(email)
        setPassword(password)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    loggingIn()
  }

  const clearForm = () => {
    setEmail("")
    setPassword("")
  }

  async function loggingIn(){
    try {
      let response = await fetch(`${URL}/login`, {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      })
      let data = await response.json()

      if (data.error) {
        alert("Incorrect email or password.")
        clearForm()
      } else {
        // NEED TO CHANGE THE ALERT TO A USER ACTION FROM REDUX
        alert("Successfully logged in!")
        localStorage.setItem("token", data.token)
      }
    } catch(e) {
      alert("The following error occured: ", e)
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
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
