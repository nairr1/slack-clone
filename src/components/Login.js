import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    })
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
      <img src='https://i.pinimg.com/originals/4f/34/3d/4f343d4f4f998697b22d275ba3f815e4.jpg'/>
      <h1>RahulCord</h1>
      <p>Become someone you're not..</p>

      <Button 
      onClick={signIn}
      >
        Sign in
      </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  color: #EEE8F3;
  background-image: url("https://i.pinimg.com/originals/40/ec/19/40ec193943499cb7de10b7f3522cd5e7.gif");
  background-repeat: repeat;
`;

const LoginInnerContainer = styled.div`
  text-align: center;
  border-radius: 50px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: rgba(179, 147, 211, 0.5);

  > img {
    object-fit: contain;
    height: 50px;
    border-radius: 100%;
    padding: 10px;
  }

  > button {
    margin-top: 15px;
    background-color: #C8A1F0;
    border-radius: 10px;
  }

  > button:hover {
    background-color: #EADAFB;
    color: purple;
  }

  > h1 {
    -webkit-text-stroke: 1px #EADAFB;
    text-shadow: 0px 2px 50px rgba(179, 147, 211, 0.8);
  }

  > p {
    margin-top: 5px;
    text-shadow: 0px 2px 1px rgba(179, 147, 211, 0.8);
  }
`;