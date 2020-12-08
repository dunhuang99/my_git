import React from 'react'

export default class RefsAndDOM extends React.Component{

    constructor(){
        super()
        this.username = React.createRef()
    }

    onSubmitHnadler = (event) =>{
        event.preventDefault()
    }

    onCLickHnadler = (event) =>{
        console.log(this.username.current.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.onSubmitHnadler }>
                    <input type="text" ref={ this.username }/>
                    <button onClick={ this.onCLickHnadler }>提交</button>
                </form>
            </div>
        )
    }
}