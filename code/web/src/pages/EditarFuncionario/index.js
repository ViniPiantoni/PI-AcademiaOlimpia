import React from 'react'
import {useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import './styles.css';

export default function EditarFuncionario() {
    document.title = 'Editar - Funcionário';

    const history = useHistory();

    const date = new Date();
	const dateBR = date.toLocaleDateString('pt-BR');

    function handleSaveAndCancel() {
		localStorage.clear();
		history.push('/base/dados/funcionario/');
	}

    return(
        <body className="body">
            <Header />

            <SubHeader
            nameBase="EDITAR - FUNCIONÁRIO"
            />

            <div className="register-containerFuncionario">
            <section className="formRegisterFuncionario">
                <form>
                    <p className="stylePFuncionario">Nome</p>
                    <input
                        className="input-register-forms-full-funcionario"
                        type="text"
                        required="required"
                        value="Ricardo de Jesus"
                    />

                    <p className="stylePFornecedor">CPF</p>
                    <InputMask
                            className="input-register-forms-full-funcionario"
                            id="cpf"
                            mask="999.999.999-99"
                            type="text"
                            required="required"
                            value="749.830.010-93"
                    />

                    <div className="p-groupRegisterFuncionario">
                        <p className="stylePFuncionario">Cargo</p> <p className="styleP-CategoriaFuncionario">Salário</p>
                    </div>

                    <div className="inp-groupFuncionario">
                        <input
                            className="input-register-forms-partition-funcionario"
                            type="text"
                            required="required"
                            value="Professor de Musculação"
                        />

                        <input
                            className="input-register-forms-partition-funcionario"
                            type="text"
                            required="required"
                            value="R$ 1.500,00"
                        />

                    </div>

                    <div className="p-groupRegisterFuncionario">
                        <p className="stylePFuncionario">Data de Pagamento</p> <p className="styleP-DataCadastroFuncionario">Data de Cadastro</p>
                    </div>

                    <div className="inp-groupFuncionario">
                        <InputMask
                            className="input-register-forms-partition-funcionario"
                            id="date"
                            mask="99/99/9999"
                            type="text"
                            required="required"
                            value="01/05/2022"
                        />
                        <InputMask
                            className="input-register-forms-partition-funcionario"
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