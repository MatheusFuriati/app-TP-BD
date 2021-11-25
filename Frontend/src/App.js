import React, { useState, useEffect } from 'react';

import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import firebaseApp from './firebaseConfig';

import Routes from './Rotas';

import './App.css';

function App() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const limparInputs = () => {
        setEmail('');
        setPassword('');
    }

    const limparErros = () => {
        setEmailError('');
        setPasswordError('');
    }

    const login = (e) => {
        e.preventDefault();
        limparErros();

        if (!email) {
            setEmailError("Email não pode ficar vazio");
            return false;
        } else if (!password) {
            setPasswordError("Senha não pode ficar vazia");
            return false;
        }

        firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            let erro = "";
            switch (err.code) {
                case "auth/invalid-email":
                    erro = "Email inválido.";
                    setEmailError(erro);
                    break;
                case "auth/user-disabled":
                    erro = "Usuario desabilitado.";
                    setEmailError(erro);
                    break;
                case "auth/user-not-found":
                    erro = "Usuario não encontrado. Caso não tenha uma conta, clique em Registre-se.";
                    setEmailError(erro);
                    break;
                case "auth/wrong-password":
                    erro = "Favor verifica sua senha.";
                    setPasswordError(erro);
                    break;
                default:
                    break;
            }
        });
    }

    const registrar = (e) => {
        e.preventDefault();
        limparErros();

        if (!email) {
            setEmailError("Email não pode ficar vazio");
            return false;
        } else if (!password) {
            setPasswordError("Senha Email não pode ficar vazio");
            return false;
        } else if (password !== confirmPassword) {
            setPasswordError("As senhas são diferentes");
            return false;
        }

        firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            let erro = "";
            switch (err.code) {
                case "auth/email-already-in-use":
                    erro = "Email já cadastrado, tente fazer o login ou utilize um email diferente";
                    setEmailError(erro);
                    break;
                case "auth/invalid-email":
                    erro = "Email inválido.";
                    setEmailError(erro);
                    break;
                case "auth/weak-password":
                    erro = "Sua senha necessita ter pelo menos 6 caracteres";
                    setPasswordError(erro);
                    break;
                default:
                    break;
            }
        });
    }

    const logout = () => {
        firebaseApp
        .auth()
        .signOut();
        
    }

    const authListener = () => {
        
        firebaseApp
        .auth()
        .onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setUser(user);
                limparInputs();
            } else {
                setUser('');
            }
        });
    }

    useEffect(() => {
        authListener();
        // eslint-disable-next-line
    }, []);

  if (!user) {
    return (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        login={login}
        registrar={registrar}
        emailError={emailError}
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
