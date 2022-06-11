import React from 'react';
import { useHistory} from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

import './styles.css';

export default function Header(){

	const history = useHistory();

	// Método de logout
	function handleExit() {
		localStorage.clear();
		history.push('/');
	}

	function handleDashboard() {
		localStorage.clear();
		history.push('/dashboard/');
	}

	function handleBaseDados() {
		localStorage.clear();
		history.push('/base/dados/');
	}

	function handleStatusContabil() {
		localStorage.clear();
		history.push('/status/contabil/');
	}
	
    return(
        <>
         <div className="header">
				<div className="contentLeftTop">
					<span className="spanHeader" onClick={handleDashboard}>DASHBOARD</span>
					<span className="spanHeader" onClick={handleBaseDados}>BASE DE DADOS</span>
					<span className="spanHeader" onClick={handleStatusContabil}>STATUS CONTÁBIL</span>
				</div>

				<div className="contentRightTop">	
					<span className="spanBemVindo">BEM VINDO!</span>
					<AiOutlineLogout className="iconLogout" size={20} color={'#ff0000'} cursor="pointer" onClick={handleExit}  />
				</div>

			</div>
        </>
    )
}