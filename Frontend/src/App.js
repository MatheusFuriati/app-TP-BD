import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

import Routes from './Rotas';
import { api } from './services';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [CPF, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCPFError, setCPFError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const limparInputs = () => {
    setCPF('');
    setPassword('');
  };

  const limparErros = () => {
    setCPFError('');
    setPasswordError('');
  };

  const login = (e) => {
    e.preventDefault();
    limparErros();

    if (!CPF || !password) {
      setCPFError('Um dos campos possui erro!');
      return false;
    }

    const login = { username: CPF, password: password };
    api
      .post('/students/login', login)
      .then((response) => {
        const { user } = response.data;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.response.statusText);
        setCPFError(error.response.statusText);
      });
  };

  const logout = () => {
    //remover token do navegador
    // firebaseApp.auth().signOut();
  };

  useEffect(() => {
    // authListener();
    // eslint-disable-next-line
  }, []);

  if (!user) {
    return (
      <Login
        CPF={CPF}
        setCPF={setCPF}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        login={login}
        isCPFError={isCPFError}
        passwordError={passwordError}
        limparErros={limparErros}
        limparInputs={limparInputs}
      ></Login>
    );
  }
  return (
    <BrowserRouter>
      <Header logout={logout} user={user}></Header>

      <Routes></Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
