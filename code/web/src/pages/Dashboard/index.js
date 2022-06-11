import React from 'react';
import { useHistory} from 'react-router-dom';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import GraficoPizza from '../../components/GraficoPizza';
import GraficoBar from '../../components/GraficoBar';

import iconFuncionario from '../../assets/funcionario.png';
import iconCaminhao from '../../assets/caminhao.png';
import iconCliente from '../../assets/cliente.png';
import iconConta from '../../assets/conta.png';

import './styles.css';

export default function Dashboard() {
    document.title = 'Dashboard';

    const history = useHistory();

    function exportRelatorio(){
        window.print()
    }

    function handleCadastroFuncionario() {
		localStorage.clear();
		history.push('/cadastrar/funcionario/');
	}

    function handleCadastroFornecedor() {
		localStorage.clear();
		history.push('/cadastrar/fornecedor/');
	}

    function handleCadastroCliente() {
		localStorage.clear();
		history.push('/cadastrar/cliente/');
	}

    function handleCadastroConta() {
		localStorage.clear();
		history.push('/cadastrar/conta/');
	}

    return(
        <body className="bodyDash">
            <Header />

            <SubHeader
            nameBase="DASHBOARD"
            />

            <div className="dashboardContentTop">
                <div className="contentDespesasEReceitas">
                    <div className="titleDespesasEReceitas">
                        <span className="spanTitle">CADASTRAR - DESPESAS E RECEITAS</span>
                    </div>
                    <div className="internContentDespesasEReceitas">

                        <div className="subContentInternDespesasEReceitas">
                            <div className="contentInternImage">
                                <img className="imgFuncionarioDash" src={iconFuncionario} alt=" "></img>
                            </div>
                            <div className="contentInternArea">
                                <span className="spanInternDespesasEReceitasLast" onClick={handleCadastroFuncionario}>FUNCIONÁRIO</span>
                            </div>
                        </div>

                        <div className="subContentInternDespesasEReceitas">
                            <div className="contentInternImage">
                                <img className="imgCaminhaoDash" src={iconCaminhao} alt=" "></img>
                            </div>
                            <div className="contentInternArea">
                                <span className="spanInternDespesasEReceitasLast" onClick={handleCadastroFornecedor}>FORNECEDOR</span>
                            </div>
                        </div>

                        <div className="subContentInternDespesasEReceitas">
                            <div className="contentInternImage">
                                <img className="imgClienteDash" src={iconCliente} alt=" "></img>
                            </div>
                            <div className="contentInternArea">
                                <span className="spanInternDespesasEReceitasLast" onClick={handleCadastroCliente}>CLIENTE</span>
                            </div>
                        </div>

                        <div className="subContentInternDespesasEReceitasLast">
                            <div className="contentInternImage">
                                <img className="imgContaDash" src={iconConta} alt=" "></img>
                            </div>
                            <div className="contentInternArea">
                                <span className="spanInternDespesasEReceitasLast" onClick={handleCadastroConta}>CONTAS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contentRelatorio">
                    <div className="titleRelatorio">
                        <span className="spanTitle">GERAR RELATÓRIO</span>
                    </div>
                    <div className="internContentRelatorio">
                        <div className="InternContentRelatorioData">
                            <div className="subInternContentRelatorioData">
                                <span className="spanInternContentRelatorioData">DATA INICIAL: </span>
                                {<input id="date" type="date" className="inputDateDash"></input>}      
                            </div>
                            <div className="subInternContentRelatorioDataLast">
                                <span className="spanInternContentRelatorioDataLast">DATA FINAL: </span>
                                {<input id="date" type="date" className="inputDateDash"></input>}   
                            </div>
                        </div>
                        <div className="InternContentRelatorioButton">
                            <button className="buttonGerarDash" onClick={exportRelatorio}>GERAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentGraficos">
                <div className="contentInternGraficosPizza">
                    <GraficoPizza/>
                </div>
                <div className="contentInternGraficosBarra">
                    <GraficoBar/>
                </div>
            </div>
        </body>
    )

}