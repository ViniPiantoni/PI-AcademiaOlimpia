import React from 'react'
import {useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import './styles.css';

export default function EditarCliente() {
    document.title = 'Editar - Cliente';

    const history = useHistory();

    const date = new Date();
	const dateBR = date.toLocaleDateString('pt-BR');

    function handleSaveAndCancel() {
		localStorage.clear();
		history.push('/base/dados/cliente/');
	}

    return(
        <body className="body">
            <Header />

            <SubHeader
            nameBase="EDITAR - CLIENTE"
            />

            <div className="register-containerCliente">
            <section className="formRegister">
                <form>
                    <p className="stylePCliente">Nome</p>
                    <input
                        className="input-register-forms-full-cliente"
                        type="text"
                        required="required"
                        value="Ricardo de Jesus"
                    />

                    <p className="stylePCliente">CPF</p>
                    <InputMask
                            className="input-register-forms-full-cliente"
                            id="cpf"
                            mask="999.999.999-99"
                            type="text"
                            required="required"
                            value="065.504.730-12"
                    />

                    <div className="p-groupRegisterCliente">
                        <p className="stylePCliente">Mensalidade</p> <p className="styleP-CategoriaCliente">Categoria</p>
                    </div>

                    <div className="inp-groupCliente">
                        <InputMask
                            className="input-register-forms-partition-cliente"
                            id="mensalidade"
                            type="text"
                            required="required"
                            value="R$ 99,00"
                        />
                        <select
                         className="input-register-forms-partition-cliente"
                         type="text"
                         required="required"
                        >
                            <option>Musculação + Artes Marciais</option>
                            <option>Artes Marciais</option>
                            <option selected>Musculação</option>
                        </select>
                    </div>

                    <div className="p-groupRegisterCliente">
                        <p className="stylePCliente">Data de Pagamento</p> <p className="styleP-DataCadastroCliente">Data de Cadastro</p>
                    </div>

                    <div className="inp-groupCliente">
                        <InputMask
                            className="input-register-forms-partition-cliente"
                            id="date"
                            mask="99/99/9999"
                            type="text"
                            required="required"
                            value="01/05/2022"
                        />
                        <InputMask
                            className="input-register-forms-partition-cliente"
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