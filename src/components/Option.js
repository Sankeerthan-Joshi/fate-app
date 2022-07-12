import  React from 'react';

const Option = (props)=>{
    return (
        <div className="option">
        <span>{props.optionDisplay}</span>
        <button onClick={(e)=>{
            props.handleRemoveOption(props.optionDisplay);
        }}>X</button>
        </div>
    );
}

export default Option;