import React from 'react';
import './styles.css';

function Images(props) {
    return (
        <div className="card">
            <div data-id={props.id} onClick={() => props.imageClick(props.id)}>
                <div className="img-container" >
                    <img alt={props.name} src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default Images;