

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const json = localStorage.getItem('count');
        const count = parseInt(json);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            const json = this.state.count;
            localStorage.setItem('count', json);
        }
    }

    componentWillUnmount(){

    }
    handlePlusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        })
    }
    handleReset(){
        this.setState(()=>{
            return {
                count: 0
            };
        })
    }
    render(){

        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
const root = document.getElementById("app");
ReactDOM.render(<Counter />, root);

// function renderHTML(){
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length>0 ? "Here are your options": "No options!"}</p>
//             <h1>COUNT: {count}</h1>
//             <button onClick={addOne}>+1</button>{"\n"}
//             <button onClick={minusOne}>-1</button>
//             <div>
//                 <button onClick={reset}>Reset</button>
//             </div>
//         </div>
//     );
//     ReactDOM.render(template,root);
// }
// let count = 0;
// const addOne=()=>{
//     count++;
//     renderHTML();
// }
// const minusOne=()=>{
//     count--;
//     renderHTML();
// }
// const reset=()=>{
//     count =0;
//     renderHTML();
// }