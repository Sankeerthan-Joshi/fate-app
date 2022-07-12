class VisiblityToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visiblity: false

        };
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton(){
        this.setState((prevState)=>{
            return {
                visiblity: !prevState.visiblity
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleButton}>{!this.state.visiblity ? "show" : "hide"}</button>
                {this.state.visiblity && <p>This subtitle is now visible!</p>}
            </div>
        );
    }
}
const root = document.getElementById("app");
ReactDOM.render(<VisiblityToggle />, root);


// console.log("Running!");

// const root = document.getElementById("app");
// const onSubmitFn = () => {
//     if(buttonName==="Show Details"){
//         buttonName="Hide Details";
//         onButtonClick = <p>Hey, These are some details you can see.</p>
//     }else {
//         buttonName="Show Details";
//         onButtonClick = null;
//     }
//     renderHTML();
// }
// let buttonName="Show Details";
// let onButtonClick;
// function renderHTML(){
//     const template = (
//         <div>
//         <h1>Visiblity Toggle</h1>
//         <button onClick={onSubmitFn}>{buttonName}</button>
//         {onButtonClick}
//         </div>
//     );

//     ReactDOM.render(template,root);
// }
// renderHTML();