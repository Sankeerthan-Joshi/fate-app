import React from 'react';
import ReactDOM from 'react-dom';
import FateApp from './components/FateApp';
import 'normalize.css/normalize.css';
import './styles/styles.css';


const root = document.getElementById("app");
ReactDOM.render(<FateApp />, root);





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



// class Option extends React.Component{
//     render(){
//         return (
//             <p>{this.props.optionDisplay}</p>
//         );
//     }
// }


