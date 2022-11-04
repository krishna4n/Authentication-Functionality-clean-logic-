import {Component} from 'react'
import Cookie from 'js-cookie'
import './index.css'

class Login extends Component {
  onClickLogin = async () => {
    const {history} = this.props
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)
      const jwtToken = data.jwt_token
      Cookie.set('jwt_token', jwtToken, {expires: 1, path: '/'})
      history.replace('/')
    }
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')

    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
