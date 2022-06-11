import React from 'react';
import {useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import BeforeTable from '../../components/BeforeTable';

import './styles.css';

export default function BaseConta() {
	document.title = 'Base de Dados - Conta';

	const history = useHistory();

	function handleRegister() {
		localStorage.clear();
		history.push('/cadastrar/conta/');
	}

	function handleEditLine() {
		localStorage.clear();
		history.push('/editar/conta/');
	}

	return (
		<body className="body">

			<Header />

			<SubHeader
				nameBase="BASE DE DADOS - CONTA"
			/>

			<BeforeTable
				nameFunction={handleRegister}
			/>

			<div className="tableTittleSpace">
				<div className="TittleTable">
					<span className="spanTittleTable">DADOS - CONTAS</span>
				</div>
			</div>

			<div className="tableContent">
				<table id="table" className="table">
					<tr>
						<th>DESPESA</th>
						<th>DESCRIÇÃO</th>
						<th>VALOR</th>
						<th>STATUS</th>
						<th>DATA DE PAGAMENTO</th>
						<th>OPÇÕES</th>
					</tr>
					
					<tr>
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
						<td>Conta de Luz</td>
						<td>Conta de Luz - Salão DIC 3</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								450
							)}
						</td>
						<td>Paga</td>
						<td>31/05/2022</td>
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
