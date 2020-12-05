import React from 'react'

export default class IfDemo extends React.Component{

    constructor(){
        super()
        this.state = {
            isLogin: false,
            names: ['哈哈' , '呵呵']
        }
    }

    clickHander = () =>{
        this.setState({
            isLogin: true
        })
    }

    render(){
        const { names } = this.state
        let showView = this.state.isLogin ? 
            <div>
                {
                    names.map((element, index) => {
                        return <p key={index}>{element}</p>
                    })
                }
            </div>
            :
            <div>
                请稍等。。。
            </div>
        return (
            <div>
                <h1>条件渲染</h1>
                {showView}
                <button onClick={ this.clickHander }> 登录</button>
            </div>
        )
    }
}