import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parents extends React.Component{


    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    onChangeHnadler = (event) =>{
        this.setState({
            count: event.target.value
        })
    }

    render(){
        return(
            <div>
                <p>parent</p>
                <input type="text" value={ this.state.count } onChange={ this.onChangeHnadler }/>
                <Child1 count={ this.state.count }/>
                <Child2 count={ this.state.count }/>
            </div>
        )
    }
}