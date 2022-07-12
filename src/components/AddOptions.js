import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }

    handleAddOption = (e)=>{
        e.preventDefault();
        let option=e.target.elements.option.value
        const error = this.props.handleAddOption(option);
        this.setState(()=> ({error}))
        if(!error)
            e.target.elements.option.value = '';
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input className='text' type="text" name="option"></input>
                    <button className='add-item'>Add Item</button>
                </form>
            </div>
        );
    }
}