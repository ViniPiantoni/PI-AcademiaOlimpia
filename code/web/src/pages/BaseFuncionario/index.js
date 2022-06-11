import React from 'react';
import {useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import BeforeTable from '../../components/BeforeTable';

import './styles.css';

export default function BaseFuncionario() {
	document.title = 'Base de Dados - Funcionário';

	const history = useHistory();

	function handleRegister() {
		localStorage.clear();
		history.push('/cadastrar/funcionario/');
	}

	function handleEditLine() {
		localStorage.clear();
		history.push('/editar/cliente/');
	}

	return (
		<body className="body">

			<Header />

			<SubHeader
			nameBase="BASE DE DADOS - FUNCIONÁRIO"
			/>

			<BeforeTable 
				nameFunction={handleRegister}
			/>

			<div className="tableTittleSpace">
				<div className="TittleTable">
					<span className="spanTittleTable">DADOS - FUNCIONÁRIOS</span>
				</div>
			</div>

			<div className="tableContent">
				<table id="table" className="table">
					<tr>
						<th>NOME</th>
						<th>CPF</th>
                        <th>SALÁRIO</th>
                        <th>CARGO</th>
						<th>DATA DE PAGAMENTO</th>
						<th>DATA DE CADASTRO</th>
						<th>OPÇÕES</th>
					</tr>
					
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>Ricardo de Jesus</td>
						<td>749.830.010-93</td>
                        <td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								1500
							)}
						</td>
                        <td>Professor de Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" onClick={handleEditLine} size={15} color={'#333333'} />
								</button>
								<button								
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiTrash2 className="icons" size={15} color={'#333333'} />
								</button>
							</div>
						</td>
					</tr>
				</table>
			</div>	
		</body>
	);
}
