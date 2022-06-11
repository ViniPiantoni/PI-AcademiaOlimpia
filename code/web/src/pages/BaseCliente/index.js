import React from 'react';
import {useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import BeforeTable from '../../components/BeforeTable';

import './styles.css';

export default function BaseCliente() {
	document.title = 'Base de Dados - Cliente';

	const history = useHistory();

	function handleRegister() {
		localStorage.clear();
		history.push('/cadastrar/cliente/');
	}

	function handleEditLine() {
		localStorage.clear();
		history.push('/editar/cliente/');
	}

	return (
		<body className="body">

			<Header />

			<SubHeader
				nameBase="BASE DE DADOS - CLIENTE"
			/>

			<BeforeTable
				nameFunction={handleRegister}
			 />

			<div className="tableTittleSpace">
				<div className="TittleTable">
					<span className="spanTittleTable">DADOS - CLIENTES</span>
				</div>
			</div>

			<div className="tableContent">
				<table id="table" className="table">
					<tr>
						<th>NOME</th>
						<th>CPF</th>
						<th>MENSALIDADE</th>
						<th>CATEGORIA</th>
						<th>DATA DE PAGAMENTO</th>
						<th>DATA DE CADASTRO</th>
						<th>OPÇÕES</th>
					</tr>
					
					<tr>
						<td>Ricardo de Jesus</td>
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
						<td>065.504.730-12</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								99
							)}
						</td>
						<td>Musculação</td>
						<td>01/05/2022</td>
						<td>25/04/2022</td>
						<td>
							<div className="profileIcons">
								<button
									type="button"
									style={{ border: 0, width: 0 }}
								>
									<FiEdit className="icons" size={15} color={'#333333'} onClick={handleEditLine}/>
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
