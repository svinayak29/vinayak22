import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './singUp.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

export const SingUp = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [data, setData] = useState([]);

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;

    if (!userInfo.firstName) {
      errors.firstName = 'Please enter the first name';
      isValid = false;
    }

    if (!userInfo.lastName) {
      errors.lastName = 'Please enter the last name';
      isValid = false;
    }

    if (!userInfo.email) {
      errors.email = 'Please enter the email';
      isValid = false;
    }

    if (!userInfo.password) {
      errors.password = 'Please enter the password';
      isValid = false;
    }

    if (!userInfo.confirmPassword) {
      errors.confirmPassword = 'Please enter the confirm password';
      isValid = false;
    } else if (userInfo.password !== userInfo.confirmPassword) {
      errors.confirmPassword = 'Please enter correct password';
      isValid = false;
    }
    setUserInfo({ ...userInfo, errors });

    if (isValid) {
      setData([
        ...data,
        {
          'Full Name': userInfo.firstName + userInfo.lastName,
          email: userInfo.email,
          password: userInfo.password,
        },
      ]);
      setUserInfo(initialState);
    }
  };
  console.log(data);
  return (
    <div className="SingUp">
      <form onSubmit={handelFormSubmit}>
        <div>
          <input
            name="firstName"
            value={userInfo.firstName}
            placeholder="Enter first name..."
            onChange={handelInputChange}
          />
          {userInfo.errors.firstName && (
            <p className="pTag">{userInfo.errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Enter last name.."
            name="lastName"
            value={userInfo.lastName}
            onChange={handelInputChange}
          />
          {userInfo.errors.lastName && (
            <p className="pTag">{userInfo.errors.lastName}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Enter email.."
            name="email"
            value={userInfo.email}
            onChange={handelInputChange}
          />
          {userInfo.errors.email && (
            <p className="pTag">{userInfo.errors.email}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Enter password.."
            name="password"
            value={userInfo.password}
            onChange={handelInputChange}
          />
          {userInfo.errors.password && (
            <p className="pTag">{userInfo.errors.password}</p>
          )}
        </div>

        <div>
          <input
            placeholder="Enter confirm password.."
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handelInputChange}
          />
          {userInfo.errors.confirmPassword && (
            <p className="pTag">{userInfo.errors.confirmPassword}</p>
          )}
        </div>
        <div className="singUp">
          <input type="submit" value="Sing up" />
        </div>
      </form>
      <div className="link">
        <hr className="hrIS me-3" />
        <Link to="/login">SingIn</Link>
        <hr className="hrIS ms-3" />
      </div>
    </div>
  );
};
