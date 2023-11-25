import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import { motion } from 'framer-motion';

function App() {
  const [user, loading] = useAuthState(auth);

  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut"
  };

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <motion.img 
          transition={{
            y: transitionValues,
          }}
          animate={{
            y: ["1rem", "0rem", "1rem"],
          }}
          src='https://i.pinimg.com/originals/4f/34/3d/4f343d4f4f998697b22d275ba3f815e4.jpg'
          />
          <motion.p>RahulCord is loading..</motion.p>
        </AppLoadingContents>
      </AppLoading>
    );
  };

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  background-color: #221E25;
  color: #EEE8F3;
`;

const AppLoading = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  color: #EEE8F3;
  background-image: url("https://i.pinimg.com/originals/40/ec/19/40ec193943499cb7de10b7f3522cd5e7.gif");
  background-repeat: repeat;
`;

const AppLoadingContents = styled.div`
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
    margin-bottom: 10px;
  }

  > p {
    margin-top: 5px;
    text-shadow: 0px 2px 1px rgba(179, 147, 211, 0.8)
  }
`;
