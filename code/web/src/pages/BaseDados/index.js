import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Modal from '../../components/Modal';

import iconFuncionario from '../../assets/funcionario.png';
import iconCaminhao from '../../assets/caminhao.png';
import iconCliente from '../../assets/cliente.png';
import iconConta from '../../assets/conta.png';

import './styles.css';

export default function BaseDados() {
    document.title = 'Base de Dados';

    const history = useHistory();

    const [ isModalVisibleFuncionario, setIsModalVisibleFuncionario ] = useState(false);
	const [ isModalVisibleFornecedor, setIsModalVisibleFornecedor] = useState(false);
    const [ isModalVisibleCliente, setIsModalVisibleCliente] = useState(false);
    const [ isModalVisibleConta, setIsModalVisibleConta] = useState(false);

    function exitModal() {
		window.location.reload();
	}

    function handleBaseDadosFuncionario() {
		localStorage.clear();
		history.push('/base/dados/funcionario/');
	}

    function handleBaseDadosFornecedor() {
		localStorage.clear();
		history.push('/base/dados/fornecedor/');
	}

    function handleBaseDadosCliente() {
		localStorage.clear();
		history.push('/base/dados/cliente/');
	}

    function handleBaseDadosContas() {
		localStorage.clear();
		history.push('/base/dados/conta/');
	}

    function appearModalFuncionario() {
		setIsModalVisibleFuncionario(!isModalVisibleFuncionario);
	}

    function appearModalFornecedor() {
		setIsModalVisibleFornecedor(!isModalVisibleFornecedor);
	}

    function appearModalCliente() {
		setIsModalVisibleCliente(!isModalVisibleCliente);
	}

    function appearModalConta() {
		setIsModalVisibleConta(!isModalVisibleConta);
	}

    const myCallBack = (dataFromChild) => {
		setIsModalVisibleFuncionario(dataFromChild);
        setIsModalVisibleFornecedor(dataFromChild);
        setIsModalVisibleCliente(dataFromChild);
        setIsModalVisibleConta(dataFromChild);
	};

    return(
        <body className="body">
            <Header />

            <SubHeader
            nameBase="BASE DE DADOS"
            />

            <div className="contentBaseDados">
                <div className="titleContentBaseDados">
                    <span className="spanTitleContentBaseDados">BASE DE DADOS</span>
                </div>

                <div className="contentInternBaseDados">
                    <div className="subDivInternetLeft">
                        <button className="buttonEstatistica"  onClick={appearModalFuncionario} >ESTATÍSTICAS</button>
                    </div>

                    {isModalVisibleFuncionario ? (
						<Modal
							modalVisible={isModalVisibleFuncionario}
							callbackFromParent={myCallBack}
							tittle="Estatísticas Agosto - Funcionário"
							contentA="Quantidade de funcionários (Musculação): 4"
                            contentB="Quantidade de funcionários (Artes Marciais): 1"
                            contentC="Quantidade de funcionários (Musculação/Artes Marciais): 2"
                            contentD="Saída Total: R$ 6.500,00"
							exit={exitModal}
						/>
					) : null}

                    <div className="subDivInternetCentral">
                        <div className="InternCentralTop">
                            <img className="imgFuncionario" src={iconFuncionario} alt="EngrePlus" />
                        </div>
                        <div className="InternCentralBottom">
                            <span className="spanInternCentral">FUNCIONÁRIO</span>
                        </div>     
                    </div>

                    <div className="subDivInternetRight">
                        <button className="buttonAcessar" onClick={handleBaseDadosFuncionario}>ACESSAR</button>
                    </div>
                </div>

                <div className="contentInternBaseDados">
                     <div className="subDivInternetLeft">
                        <button className="buttonEstatistica" onClick={appearModalFornecedor}>ESTATÍSTICAS</button>
                    </div>

                    {isModalVisibleFornecedor ? (
						<Modal
							modalVisible={isModalVisibleFornecedor}
							callbackFromParent={myCallBack}
							tittle="Estatísticas Agosto - Fornecedor"
							contentA="Produto mais vendido: Whey Protein"
                            contentB="Produto menos vendido: Vitamina C"
                            contentC="Quantidade de fornecedores: 5"
                            contentD="Saída Total: R$ 2.500,00"
							exit={exitModal}
						/>
					) : null}

                    <div className="subDivInternetCentral">
                        <div className="InternCentralTop">
                            <img className="imgCaminhao" src={iconCaminhao} alt="EngrePlus" />
                        </div>
                        <div className="InternCentralBottom">
                            <span className="spanInternCentral">FORNECEDOR</span>
                        </div> 
                    </div>

                    <div className="subDivInternetRight">
                        <button className="buttonAcessar" onClick={handleBaseDadosFornecedor}>ACESSAR</button>
                    </div>
                </div>

                <div className="contentInternBaseDados">
                    <div className="subDivInternetLeft">
                        <button className="buttonEstatistica" onClick={appearModalCliente}>ESTATÍSTICAS</button>
                    </div>

                    {isModalVisibleCliente ? (
						<Modal
							modalVisible={isModalVisibleCliente}
							callbackFromParent={myCallBack}
							tittle="Estatísticas Agosto - Cliente"
							contentA="Quantidade de mulheres: 35"
                            contentB="Quantidade de homens: 60"
                            contentC="Modalidade mais utilizada: Musculação"
                            contentD="Entrada Total: R$ 15.000,00"
							exit={exitModal}
						/>
					) : null}

                    <div className="subDivInternetCentral">
                        <div className="InternCentralTop">
                            <img className="imgCliente" src={iconCliente} alt="EngrePlus" />
                        </div>
                        <div className="InternCentralBottom">
                            <span className="spanInternCentral">CLIENTE</span>
                        </div> 
                    </div>

                    <div className="subDivInternetRight">
                        <button className="buttonAcessar" onClick={handleBaseDadosCliente}>ACESSAR</button>
                    </div>
                </div>

                <div className="contentInternBaseDados">
                    <div className="subDivInternetLeft">
                        <button className="buttonEstatistica" onClick={appearModalConta}>ESTATÍSTICAS</button>
                    </div>

                    {isModalVisibleConta ? (
						<Modal
							modalVisible={isModalVisibleConta}
							callbackFromParent={myCallBack}
							tittle="Estatísticas Agosto - Contas"
							contentA="Despesa local mais cara: Conta de Energia"
                            contentB="Saída total (Despesas Locais): R$ 5.000,00"
                            contentC="Saída total (Despesas Externas): R$ 3.500,00"
                            contentD="Saída Total: R$ 8.500,00"
							exit={exitModal}
						/>
					) : null}

                    <div className="subDivInternetCentral">
                        <div className="InternCentralTop">
                            <img className="imgConta" src={iconConta} alt="EngrePlus" />
                        </div>
                        <div className="InternCentralBottom">
                            <span className="spanInternCentral">CONTAS</span>
                        </div> 
                    </div>

                    <div className="subDivInternetRight">
                        <button className="buttonAcessar" onClick={handleBaseDadosContas}>ACESSAR</button>
                    </div>
                </div>
            </div>

        </body>
    )

}