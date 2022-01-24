import React, {useState, useEffect} from 'react';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='login-container'>
      <h1>TAPPDOUT</h1>
      <h6>DRINK SOCIALLY</h6>
      <button>Connect with Facebook</button>
      <p>OR</p>
      <form onSubmit={e => handleSubmit(e)} className='login-form'>
        <div className='username-container'>
          <input type="text"
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
          />
        </div>
        <div className='password-container'>
          <input type="text"
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <div className='recaptcha'>
          <label>I'm not a robot
            <input type="checkbox" />
          </label>
          <img src="" alt="recaptcha logo" />
        </div>
      </form>
    </div>
  )
}

export default Login;