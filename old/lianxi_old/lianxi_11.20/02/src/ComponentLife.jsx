import React from 'react'

export default class ComponentLife extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            count: 10
        }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeHander = () =>{
        this.setState({
            count: this.state.count += 1
        })
    }

    changeText = () =>{
        this.props.changeText('我是儿子的数据')
    }

    render(){
        let { count } = this.state
        return(
            <div>
                <h1>生命周期函数: { count } ---- { this.props.text }</h1>
                <button onClick = {this.changeHander}>修改</button>
                <button onClick = { this.changeText }>修改文本2222</button>
            </div>
        )
    }
}