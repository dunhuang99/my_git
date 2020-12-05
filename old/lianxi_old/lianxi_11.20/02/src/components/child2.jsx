import React from 'react'

export default class Child2 extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         count: this.props.count
    //     })
    // }

    render(){
        return(
            <div>
                Child2: { this.props.count }
            </div>
        )
    }
}