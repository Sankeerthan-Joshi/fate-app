import React from 'react';

import AddOption from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';



export default class FateApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
   
    handleRemoveOption= (optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove!==option)
        }));
    }
    handleRemoveAll= ()=>{
        this.setState(()=> ({
                options: []
            }
        ));
    }

    handleAction = ()=>{
        const randomn = Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>(
            {
                selectedOption: this.state.options[randomn]
            }));
    }

    handleAddOption = (option)=>{
        option = option.charAt(0).toUpperCase()+option.slice(1).toLowerCase();
        if(!option){
            return "Enter an option!";
        }else if(this.state.options.indexOf(option)>-1){
            return "This option already exists!";
        }
        this.setState((prevState)=>( {
                options: prevState.options.concat(option)
            }));
    }

    handleOkay = ()=>{
        this.setState(()=>(
            {
                selectedOption: undefined
            }
        ))
    }

    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options)
            this.setState(()=>({options}));
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.options !== prevState.options){
           let json = JSON.stringify(this.state.options);
           localStorage.setItem('options', json);

        }
    }
    // componentWillUnmount(){
    //     console.log("componentWillUnmount");
    // }
    render(){
        const  title = "FATE";
        const subtitle = "Put your fate in the hands of machine....";
        return (
            <div>
            <Header subtitle={subtitle} title={title} />
            <Action hasOptions={!!this.state.options.length} handleAction = {this.handleAction} />
            <Options  option ={this.state.options} 
            handleRemoveAll ={this.handleRemoveAll} 
            hasNoOptions={!this.state.options.length}
            handleRemoveOption ={this.handleRemoveOption} />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal selectedOption={this.state.selectedOption} handleOkay={this.handleOkay} />
        </div>
        );
    }
}