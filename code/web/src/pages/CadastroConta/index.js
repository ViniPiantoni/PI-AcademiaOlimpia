import React from 'react'
import {useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import './styles.css';

export default function CadastroConta() {
    document.title = 'Cadastro - Conta';

    const history = useHistory();

    function handleSaveAndCancel() {
		localStorage.clear();
		history.push('/base/dados/conta/');
	}

    return(
        <body className="body">
            <Header />

            <SubHeader
            nameBase="CADASTRO - CONTA"
            />

            <div className="register-containerConta">
            <section className="formRegisterConta">
                <form>
                    <p className="stylePConta">Despesa</p>
                    <input
                        className="input-register-forms-full-conta"
                        type="text"
                        required="required"
                    />

                    <p className="stylePConta">Descrição</p>
                    <input
                        className="input-register-forms-full-conta"
                        type="text"
                        required="required"
                    />
                    

                    <p className="stylePConta">Data de Pagamento</p>
                    <InputMask
                        className="input-register-forms-full-conta"
                        id="date"
                        mask="99/99/9999"
                        type="text"
                        required="required"
                    />

                    <div className="p-groupRegisterConta">
                        <p className="stylePValorConta">Valor</p> <p className="styleP-CategoriaConta">Status</p>
                    </div>

                    <div className="inp-groupConta">
                        <InputMask
                            className="input-register-forms-partition-conta"
                            id="mensalidade"
                            type="text"
                            required="required"
                        />
                        <select
                         className="input-register-forms-partition-conta"
                         type="text"
                         required="required"
                        >
                            <option>Vencida</option>
                            <option>Não Paga</option>
                            <option selected>Paga</option>
                        </select>
                    </div>

                    <button className="buttonNewRegister" onClick={handleSaveAndCancel} type="submit">
							SALVAR
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