import React from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Grafico from '../../components/GraficoColuna';

import './styles.css';

export default function StatusContabil() {
    document.title = 'Status Contábil';

    function exportRelatorio(){
        window.print()
    }
        

    return(
        <body className="bodyStatusContabil">
            <Header />

            <SubHeader
            nameBase="STATUS CONTÁBIL"
            />

            <div className="contentStatusContabil">
                <div className="titleContentStatusContabil">
                    <i className="spanTitleContentStatusContabil">STATUS CONTÁBIL -  </i>

                    {<input id="date" type="date" className="inputDate"></input>} 
                    <i className="spanTitleContentStatusContabil">/</i>
                    {<input id="date" type="date" className="inputDate"></input>}
                    <button className="buttonExportar" onClick={exportRelatorio}>EXPORTAR</button>
             
                </div>

                <div className="contentGrafico">
                    <Grafico/>
                </div>

                <div className="contentResults">
                    <div className="contentInternResultsGreen">
                        <span className="spanResults">LUCRO LÍQUIDO TOTAL = R$ 22.000,00</span>
                    </div>
                    <div className="contentInternResultsGreen">
                        <span className="spanResults">LUCRO BRUTO TOTAL = R$ 34.000,00</span>
                    </div>
                    <div className="contentInternResultsRed">
                        <span className="spanResults">SAÍDA TOTAL = R$ 12.000,00</span>
                    </div>
                        <div className="contentInternResultsRed">
                    <span className="spanResults">SAÍDA DE DESPESAS LOCAIS = R$ 8.500,00</span>
                    </div>
                </div>
                
            </div>
        </body>
    )

}