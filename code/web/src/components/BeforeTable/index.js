import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function BeforeTable(props){

    return(
        <>
        <div className="beforeTable">
            <div className="search">
                <input
                    className="searchInput"
                    type="text"
                    required="required"
                    placeholder='Pesquisar...'
                />
            </div>

            <div className="buttonRegister">
                <Link className="buttonNew_style">
                    <p className="pButton" onClick={props.nameFunction}>CADASTRAR</p>
                </Link>		
            </div>
        </div>
        </>
    )
}



