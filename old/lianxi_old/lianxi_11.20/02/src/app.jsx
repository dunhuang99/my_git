import React from 'react'
import ComponentLife from './ComponentLife'
import Home from './home'
import MyNav from './myNav'

export default class App extends React.Component{

    constructor(){
        super()
        this.state = {
            text: '文本111'
        }
    }

    changeHander = () =>{
        this.setState({
            text: '文本222'
        })
    }

    changeText = (data) =>{
        this.setState({
            text: data
        })
    }

    

    render(){
        // const nav1 = ['张三', '李四' , '王五']
        // const nav2 = ['web', 'java' , 'c++']
        return(
            <div>
                <h1>App</h1>
                <ComponentLife text = { this.state.text } changeText = { this.changeText }/>
                {/* <button onClick = { this.changeHander }>修改文本</button> */}
            </div>
        )
    }
}
