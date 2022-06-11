import React from 'react';
import { useHistory} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/LOGO1.png';
import visible from '../../assets/visible.svg';
import notVisible from '../../assets/not-visible.svg';

export default function Logon(props) {
    document.title = 'Academia Olímpia';
    
    const history = useHistory();

	// Método de logout
	function handleLogout() {
		localStorage.clear();
		history.push('/dashboard/');
	}

    function ShowPassword() {
        const inputElement = document.querySelector('#inputPassword');
        const type = inputElement.getAttribute('type');
        const imgElement = document.querySelector('#eye');

        if (type === 'password') {
            inputElement.setAttribute('type', 'text');
            imgElement.src = notVisible;
        } else {
            inputElement.setAttribute('type', 'password');
            imgElement.src = visible;
        }
    }

    return (
        <body className="bodyNotLogged">
            <div className="logon-container">
                <div className="divLogo">
                    <img className="imgLogo" src={logo} alt="EngrePlus" />
                </div>
                <section className="form">
                    <form name="formLogon">
						
                        <p className="classP">Usuário</p>
                        <input
                            name="formName"
                            id="inputName"
                            type="text"
                        />

                        <p>Senha</p>
                        <div className="eye">
                            <input
                                name="forPassword"
                                type="password"
                                id="inputPassword"
                            />
                            <img id="eye" alt="eye" src={visible} onClick={ShowPassword} />
                        </div>
                        <button className="button" type="submit" onClick={handleLogout}>
                            ACESSAR
                        </button>
                    </form>
                </section>
            </div>
        </body>
    );
}