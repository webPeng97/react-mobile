import React, { Component } from 'react'
import '../../../assets/scss/exercise.scss'
import { CSSTransition } from 'react-transition-group'

class Css3 extends Component {
  state = {
    isShow:true
  }
  render() {
    return (
      <div>
        {/* 注意这里的classNames 加了s, unmountOnExit在元素退场时，自动把DOM也删除 */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="show-text"
          unmountOnExit>
        <div>动画</div>
        </CSSTransition>
        {/* <div className={this.state.isShow ? 'show' : 'hide'}>动画</div> */}
        <div onClick={this.toToggole.bind(this)}>出现/隐藏动画</div>
      </div>
    )
  }
  toToggole () {
    console.log('点击', this.state.isShow)
    this.setState({
      isShow:this.state.isShow ? false : true
    })
  }

}
 
export default Css3