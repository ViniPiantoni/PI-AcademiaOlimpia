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
                        <button className="buttonEstatistica"  onClick={appearModalFuncionario} >ESTAT??STICAS</button>
                    </div>

                    {isModalVisibleFuncionario ? (
						<Modal
							modalVisible={isModalVisibleFuncionario}
							callbackFromParent={myCallBack}
							tittle="Estat??sticas Agosto - Funcion??rio"
							contentA="Quantidade de funcion??rios (Muscula????o): 4"
                            contentB="Quantidade de funcion??rios (Artes Marciais): 1"
                            contentC="Quantidade de funcion??rios (Muscula????o/Artes Marciais): 2"
                            contentD="Sa??da Total: R$ 6.500,00"
							exit={exitModal}
						/>
					) : null}

                    <div className="subDivInternetCentral">
                        <div className="InternCentralTop">
                            <img className="imgFuncionario" src={iconFuncionario} alt="EngrePlus" />
                        </div>
                        <div className="InternCentralBottom">
                            <span className="spanInternCentral">FUNCION??RIO</span>
                        </div>     
                    </div>

                    <div className="subDivInternetRight">
                        <button className="buttonAcessar" onClick={handleBaseDadosFuncionario}>ACESSAR</button>
                    </div>
                </div>

                <div className="contentInternBaseDados">
                     <div className="subDivInternetLeft">
                        <button className="buttonEstatistica" onClick={appearModalFornecedor}>ESTAT??STICAS</button>
                    </div>

                    {isModalVisibleFornecedor ? (
						<Modal
							modalVisible={isModalVisibleFornecedor}
							callbackFromParent={myCallBack}
							tittle="Estat??sticas Agosto - Fornecedor"
							contentA="Produto mais vendido: Whey Protein"
                            contentB="Produto menos vendido: Vitamina C"
                            contentC="Quantidade de fornecedores: 5"
                            contentD="Sa??da Total: R$ 2.500,00"
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
                        <button className="buttonEstatistica" onClick={appearModalCliente}>ESTAT??STICAS</button>
                    </div>

                    {isModalVisibleCliente ? (
						<Modal
							modalVisible={isModalVisibleCliente}
							callbackFromParent={myCallBack}
							tittle="Estat??sticas Agosto - Cliente"
							contentA="Quantidade de mulheres: 35"
                            contentB="Quantidade de homens: 60"
                            contentC="Modalidade mais utilizada: Muscula????o"
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
                        <button className="buttonEstatistica" onClick={appearModalConta}>ESTAT??STICAS</button>
                    </div>

                    {isModalVisibleConta ? (
						<Modal
							modalVisible={isModalVisibleConta}
							callbackFromParent={myCallBack}
							tittle="Estat??sticas Agosto - Contas"
							contentA="Despesa local mais cara: Conta de Energia"
                            contentB="Sa??da total (Despesas Locais): R$ 5.000,00"
                            contentC="Sa??da total (Despesas Externas): R$ 3.500,00"
                            contentD="Sa??da Total: R$ 8.500,00"
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