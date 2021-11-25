import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { AreaLogin } from './styled';
import { BtnDefault } from '../../components/Styled';

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    login,
    registrar,
    emailError,
    passwordError,
    limparErros,
    limparInputs,
  } = props;

  const limpaTela = () => {
    limparErros();
    limparInputs();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registrar">
          <AreaLogin>
            <h1>Crie sua conta</h1>
            <form>
              <div className="form-input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <p className="errorMsg">{emailError}</p>
              <div className="form-input">
                <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <p className="errorMsg">{passwordError}</p>
              <div className="form-input">
                <label>Confirme sua senha</label>
                <input
                  type="password"
                  name="confirm-senha"
                  placeholder="Confirme sua senha"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
              <p className="errorMsg">{passwordError}</p>
              <BtnDefault onClick={registrar}>Registrar</BtnDefault>
              <div className="form-footer">
                <Link to="/" onClick={limpaTela}>
                  Voltar
                </Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
        <Route exact path="*">
          <AreaLogin>
            <h1>Login</h1>
            <form>
              <div className="form-input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p className="errorMsg">{emailError}</p>
              </div>
              <div className="form-input">
                <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="errorMsg">{passwordError}</p>
              </div>

              <BtnDefault onClick={login}>Entrar</BtnDefault>
              {/* faz login  na aplicação*/}
              <div className="form-footer">
                <Link to="/registrar" onClick={limpaTela}>
                  Registre-se
                </Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
