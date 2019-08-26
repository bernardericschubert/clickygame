import React from 'react';
import './styles.css';

function Images(props) {
    return (
        <div>
            <div value={props.id} onClick={() => props.onClick(props.id)}>
                <div>
                    <img alt={props.avenger} src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default Images