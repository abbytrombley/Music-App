import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./login.css"
import { getUserByEmail } from "../../services/userService"
import { useEffect } from "react"




export const Login = () => {

  const [email, set] = useState("")

  const navigate = useNavigate()
  
  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/564x/06/ab/4c/06ab4c99cc581c1676e1019af05605bc.jpg)`
  } , [])

  const handleLogin = (e) => {
    e.preventDefault()  

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "music_user",
          JSON.stringify({
            id: user.id,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="auth-container">
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <h1 className="header">Digital Music Library</h1>
          <h2 className="header">Please sign in</h2>
          <fieldset className="auth-fieldset">
            <div>
              <input
                type="email"
                value={email}
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <button type="submit" className="auth-button">Sign in</button>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="register-link">
        <Link to="/register">Register</Link>
      </section>
    </main>
  )
}

