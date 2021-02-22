import React from 'react';

const Button = (props) => {

    return(
        <button disabled={props.inProgress} 
            onClick={props.onClick}>
            Get Users
        </button>
    )
}

export default Button;