import React from 'react'

export default class FormDemo extends React.Component{

    constructor(){
        super()
        this.state = {
            value: ''
        }
    }


    onSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state.value)
    }

    onChangeHander = (event) =>{
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = { this.onSubmitHandler}>
                    <input type="text" value={ this.state.value } onChange = { this.onChangeHander }/>
                    <input type="submit" value='提交'/>
                </form>
            </div>
        )
    }
}