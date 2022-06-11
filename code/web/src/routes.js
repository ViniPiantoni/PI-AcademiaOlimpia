import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import BaseDados from './pages/BaseDados';

import BaseCliente from './pages/BaseCliente';
import BaseFornecedor from './pages/BaseFornecedor';
import BaseFuncionario from './pages/BaseFuncionario';
import BaseConta from './pages/BaseConta';

import CadastroCliente from './pages/CadastroCliente';
import CadastroFornecedor from './pages/CadastroFornecedor';
import CadastroFuncionario from './pages/CadastroFuncionario';
import CadastroConta from './pages/CadastroConta';

import EditarCliente from './pages/EditarCliente';
import EditarFornecedor from './pages/EditarFornecedor';
import EditarFuncionario from './pages/EditarFuncionario';
import EditarConta from './pages/EditarConta';

import StatusContabil from './pages/StatusContabil';
import NotFound from './pages/NotFound';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Logon} />
				<Route path="/dashboard/" exact component={Dashboard} />
				<Route path="/base/dados/" exact component={BaseDados} />
				<Route path="/base/dados/cliente/" exact component={BaseCliente} />
				<Route path="/base/dados/fornecedor/" exact component={BaseFornecedor} />
				<Route path="/base/dados/funcionario/" exact component={BaseFuncionario} />
				<Route path="/base/dados/conta/" exact component={BaseConta} />
				<Route path="/cadastrar/cliente/" exact component={CadastroCliente} />
				<Route path="/cadastrar/fornecedor/" exact component={CadastroFornecedor} />
				<Route path="/cadastrar/funcionario/" exact component={CadastroFuncionario} />
				<Route path="/cadastrar/conta/" exact component={CadastroConta} />
				<Route path="/editar/cliente/" exact component={EditarCliente} />
				<Route path="/editar/fornecedor/" exact component={EditarFornecedor} />
				<Route path="/editar/conta/" exact component={EditarConta} />
				<Route path="/editar/funcionario/" exact component={EditarFuncionario} />
				<Route path="/status/contabil/" exact component={StatusContabil} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
