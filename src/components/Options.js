import React from 'react';
import Option from './Option';

const Options = (props)=>{
    return (
        <div>
            <button className="remove-all" onClick={props.handleRemoveAll} disabled={props.hasNoOptions}>Reset</button>
            {props.option.length===0 && <p>Please Enter an option to get started</p>}
            {
                props.option.map((elements)=> <Option key={elements} optionDisplay={elements} handleRemoveOption={props.handleRemoveOption} />)
            }
        </div>
    );
}

export default Options;