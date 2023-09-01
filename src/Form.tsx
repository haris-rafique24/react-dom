import React from 'react';
import * as ReactDOM from 'react-dom'

interface State{
    name:String
}
interface Props{

}
export class Form extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state={
            name:''
        }
    }
    handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let input = ReactDOM.findDOMNode(this.refs["name"]) as HTMLInputElement;    
        console.log(input.value)
        this.setState({
            name:input.value
        })
    }


    render() {
        return <form className="commentForm" onSubmit={ e => this.handleSubmit(e) }>
                 <h1>Using React.findDOMNode in TypeScript</h1>
                 <input type="text" placeholder="Your name" ref="name" />
                 <button type="submit" >Submit</button>
                 {this.state.name}
               </form>;
    }
}
