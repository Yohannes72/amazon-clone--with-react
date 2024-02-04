import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          // Update user's profile with the provided name
          userCredential.user.updateProfile({
            displayName: name,
          })
          .then(() => {
            navigate('/');
          })
          .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        <div className="login__container">
          <h1>Create account</h1>

          <form>
            <h5>Your name</h5>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <h5>Mobile number or email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register} className="login__registerButton">
              Create your Amazon Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
