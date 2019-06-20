import React, { Component, Fragment } from 'react'
import { Button } from 'antd-mobile'
import Child from './component/child'
import Css3 from './component/css3'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

class Exercise extends Component {
  state = {
    inputValue: 'input值',
    list: []
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.inputChange.bind(this)}
          ref={(input)=>{this.input=input}}/>

        <Button onClick={this.addList.bind(this)}>增加</Button>
        {/* <Child content={123} /> */}
        <ul ref={(ul)=>{this.ul=ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                // html格式输出： dangerouslySetInnerHTML={{__html: item}}
                // return <li key={index} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li>
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames='show-text'
                    unmountOnExit
                    appear={true}
                    key={index}  
                  >
                    <Child key={index} must='必传值' content={item} deleteItem={this.deleteItem.bind(this)} index={index}/>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Css3/>
      </Fragment>
    )
  }

  inputChange (e) {
    this.setState({
      // inputValue: e.target.value
      inputValue:this.input.value // 当使用使用ref
    })
  }

  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log('*****length:', this.ul.querySelectorAll('div').length)
    })

    // 没等DOM渲染完就执行了
    console.log('length:', this.ul.querySelectorAll('div').length)
  }

  deleteItem(index) {
    console.log(index)
    // react是禁止直接操作state
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

}
 
export default Exercise