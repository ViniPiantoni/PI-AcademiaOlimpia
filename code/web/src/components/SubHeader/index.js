import React from 'react';

import './styles.css';

export default function SubHeader(props){

    return(
        <>
        <div className="subHeader">
				<span className="subHeaderText">{props.nameBase}</span>
        </div>
        </>
    )
}