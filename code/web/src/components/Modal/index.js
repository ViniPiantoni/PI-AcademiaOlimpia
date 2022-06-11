import React, { useState } from 'react';
import './styles.css';

import { FiX } from 'react-icons/fi';

export default function Modal(props) {
	
	const [flag] = useState(props.modalVisible)

	return(
		<>
		{ flag ?
			<div  className="modal">
				<div id="modal" className="container" >
					<div className="headerModal">
						<h4 className="textTittle">{props.tittle}</h4>
						<button className="closeIcon">
							<FiX className="closeIcon" onClick={props.exit}/>
						</button>
					</div>
					<div className="contentModal">
						<span className="textContent">{props.contentA}</span>
						<br></br>
						<span className="textContent">{props.contentB}</span>
						<br></br>
						<span className="textContent">{props.contentC}</span>
						<br></br>
						<span className="textContent">{props.contentD}</span>
					</div>
					<div className="bottomModal">
						<button className="closeButton" onClick={props.exit}>
							SAIR
						</button>
					</div>
				</div>
			</div>
		: null } 
		</>	
	)
}
