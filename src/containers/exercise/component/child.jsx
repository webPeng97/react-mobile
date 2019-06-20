import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this) // 构造函数中绑定性能会高一些
  }

  
  render() { 
    console.log('render')
    return (
      <div onClick={this.handleClick}>{this.props.must}{this.props.content}</div>
    )
  }

  // 使用shouldComponentUpdate解决子组件频繁无用渲染render(不使用shouldComponentUpdate，当input输入则会执行render,造成不必要的渲染)
  shouldComponentUpdate(nextProps,nextState){
    // nextProps:变化后的属性, nextState:变化后的状态
    console.log('************')
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }
   
  }

  handleClick () {
    console.log('chkid组件中的点击事件', this.props.index)
    // 调用父组件中的deleteItem方法
    this.props.deleteItem(this.props.index)
  }

  componentWillUnmount(){
    console.log('child - componentWillUnmount')
  }

}

// 校验传递值
Child.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  must: PropTypes.string.isRequired // 必传值的校验
}

// 使用默认值
Child.defaultProps = {
  must: '这是默认必传值'
}

export default Child
