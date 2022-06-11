import React from 'react';
import {useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import BeforeTable from '../../components/BeforeTable';

import './styles.css';

export default function BaseFornecedor() {
	document.title = 'Base de Dados - Fornecedor';

	const history = useHistory();

	function handleRegister() {
		localStorage.clear();
		history.push('/cadastrar/fornecedor/');
	}

	function handleEditLine() {
		localStorage.clear();
		history.push('/editar/fornecedor/');
	}

	return (
		<body className="body">

			<Header />

			<SubHeader
			nameBase="BASE DE DADOS - FORNECEDOR"
			/>

			<BeforeTable 
				nameFunction={handleRegister}
			/>

			<div className="tableTittleSpace">
				<div className="TittleTable">
					<span className="spanTittleTable">DADOS - FORNECEDORES</span>
				</div>
			</div>

			<div className="tableContent">
				<table id="table" className="table">
					<tr>
						<th>NOME</th>
						<th>CNPJ</th>
						<th>PRODUTO</th>
						<th>VALOR</th>
						<th>DATA DE PAGAMENTO</th>
						<th>DATA DE CADASTRO</th>
						<th>OPÇÕES</th>
					</tr>
					
					<tr>
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
						<td>Gold Suplementos</td>
						<td>06.765.251/0001-43</td>
						<td>Whey Protein</td>
						<td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								800
							)}</td>
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
