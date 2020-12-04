import React from 'react'

export default class StateComponent extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name: 10
        }
    }

    increment () {
        this.setState({
            name: this.state.name += 1
        })
    }

    decrement () {
        this.setState({
            name: this.state.name -= 1
        })
    }

    hander = () =>{
        console.log(this)
        this.setState({
            name: this.state.name += 2
        })
    }


    render(){
        return(
            <div>
                <h1> 我是 : { this.state.name }</h1>
                <button onClick = { this.increment.bind(this) }>increment</button>
                <button onClick = { this.decrement.bind(this) }>decrement</button>
                <button onClick = { this.hander}>hander</button>
            </div>
        )
    }


}