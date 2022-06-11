import React from 'react'
import {useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import './styles.css';

export default function EditarFornecedor() {
    document.title = 'Editar - Fornecedor';

    const history = useHistory();

    const date = new Date();
	const dateBR = date.toLocaleDateString('pt-BR');

    function handleSaveAndCancel() {
		localStorage.clear();
		history.push('/base/dados/fornecedor/');
	}

    return(
        <body className="body">
            <Header />

            <SubHeader
            nameBase="EDITAR - FORNECEDOR"
            />

            <div className="register-containerFornecedor">
            <section className="formRegisterFornecedor">
                <form>
                    <p className="stylePFornecedor">Nome</p>
                    <input
                        className="input-register-forms-full-fornecedor"
                        type="text"
                        required="required"
                        value="Gold Suplementos"
                    />

                    <p className="stylePFornecedor">CNPJ</p>
                    <InputMask
                            className="input-register-forms-full-fornecedor"
                            id="cnpj"
                            mask="99.99.999/9999-99"
                            type="text"
                            required="required"
                            value="06.765.251/0001-43"
                    />

                    <div className="p-groupRegisterFornecedor">
                        <p className="stylePFornecedor">Produto</p> <p className="styleP-CategoriaFornecedor">Valor</p>
                    </div>

                    <div className="inp-groupFornecedor">
                        <input
                            className="input-register-forms-partition-fornecedor"
                            type="text"
                            required="required"
                            value="Whey Protein"
                        />

                        <input
                            className="input-register-forms-partition-fornecedor"
                            type="text"
                            required="required"
                            value="R$ 800,00"
                        />

                    </div>

                    <div className="p-groupRegisterFornecedor">
                        <p className="stylePFornecedor">Data de Pagamento</p> <p className="styleP-DataCadastroFornecedor">Data de Cadastro</p>
                    </div>

                    <div className="inp-groupFornecedor">
                        <InputMask
                            className="input-register-forms-partition-fornecedor"
                            id="date"
                            mask="99/99/9999"
                            type="text"
                            required="required"
                            value="01/05/2022"
                        />
                        <InputMask
                            className="input-register-forms-partition-fornecedor"
                            id="date"
                            mask="99/99/9999"
                            type="text"
                            required="required"
                            value = {dateBR}
                        />
                    </div>

                    <button className="buttonNewRegister" onClick={handleSaveAndCancel} type="submit">
							EDITAR
                    </button>
                    <button className="buttonCancel" onClick={handleSaveAndCancel} type="submit">
							CANCELAR
                    </button>
                </form>
            </section>
            </div>


        </body>
    )
}