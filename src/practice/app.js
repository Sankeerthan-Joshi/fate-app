class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        };
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
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
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    handleRemoveOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove!==option)
        }));
    }
    handleRemoveAll(){
        this.setState(()=> ({
                options: []
            }
        ));
    }

    handleAction(){
        const randomn = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomn]);
    }

    handleAddOption(option){
        if(!option){
            return "Enter an option!";
        }else if(this.state.options.indexOf(option)>-1){
            return "This option already exists!";
        }
        this.setState((prevState)=>( {
                options: prevState.options.concat(option)
            }));
    }
    render(){
        const  title = "Indecision";
        const subtitle = "Put your fate in the hands of machine....";
        return (
            <div>
            <Header subtitle={subtitle} />
            <Action hasOptions={!!this.state.options.length} handleAction = {this.handleAction} />
            <Options  option ={this.state.options} 
            handleRemoveAll ={this.handleRemoveAll} 
            hasNoOptions={!this.state.options.length}
            handleRemoveOption ={this.handleRemoveOption} />
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
        );
    }
}



const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision"
};

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

function Action(props) {
    return (
        <div>
            <button
                onClick={props.handleAction}
                disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
}

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handleAction} 
//                 disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props)=>{
    return (
        <div>
            <button onClick={props.handleRemoveAll} disabled={props.hasNoOptions}>Remove All</button>
            {props.option.length===0 && <p>Please Enter an option to get started</p>}
            {
                props.option.map((elements)=> <Option key={elements} optionDisplay={elements} handleRemoveOption={props.handleRemoveOption} />)
            }
        </div>
    );
}

// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
            
//                 {
//                     this.props.option.map((elements)=> <Option key={elements} optionDisplay={elements} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props)=>{
        return (
            <div>
            <p>{props.optionDisplay}</p>
            <button onClick={(e)=>{
                props.handleRemoveOption(props.optionDisplay);
            }}>Remove</button>
            </div>
        );
}

// class Option extends React.Component{
//     render(){
//         return (
//             <p>{this.props.optionDisplay}</p>
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
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
                    <input type="text" name="option"></input>
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}

const root = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, root);