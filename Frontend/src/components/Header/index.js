import { AreaHeader } from './styled';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({logout, user}) {
    
    return(
        <AreaHeader>
            <div className="container">
                <label htmlFor="btn-menu" id="label-btn-menu">&#9776;</label>
                <input type="checkbox" id="btn-menu"></input>
                <nav className="menu-principal">
                    <ul>
                        <li>Configurações</li>
                        <li>Informações do Usuário</li>
                        <li>Idioma</li>
                        <li>Segurança</li>
                        <li>Logs</li>
                        <li>Bloquear Acesso</li>
                        <li>Regras</li>
                        <li>Gráficos</li>
                    </ul>
                </nav>
                    <div className="menu-usuario">
                        <ul>
                            <li>Olá <b>{user.email}</b></li>
                            <li><img className="header-icon" src="../../../icon-user.png" alt="imagem do usuario"></img></li>
                        </ul>
                    </div>
                    <div className="sair">
                        <ul>
                            <li><Link onClick={logout}><ExitToAppIcon></ExitToAppIcon>Sair</Link></li>
                        </ul>
                    </div>
                

            </div>
        </AreaHeader>
    );
}

export default Header;
