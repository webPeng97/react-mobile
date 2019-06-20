import React, { Component, Fragment } from 'react'
import '../../assets/scss/about.scss'
import List from './component/List'
import Img from "../../assets/images/cs.jpg"
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'

const listData = [
  {
    id: '1',
    title: '标题一',
    author: '哈哈',
    time: '2019-01-01 20:20:20',
    img: Img,
    show: true
  },
  {
    id:'2',
    title: '标题一',
    author: '哈哈',
    time: '2019-01-01 20:20:20',
    img: 'http://pic2.cxtuku.com/00/01/90/b6978ae37817.jpg',
    show: false
  }
]

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'input值',
      list: []
    }
  }

  componentDidMount () {
    document.title = 'About'
  }
  render () {
    // console.log('this.props', this.props)
    let { pageTitle } = this.props
    return (
      <Fragment>
        <List list={listData}/>
        <Button onClick={() => {this.props.history.push('/')}}>Home</Button>
        <Button onClick={() => {this.props.history.push('/topics')}}>Topics</Button>
        <p>{pageTitle}</p>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
        <Button onClick={this.addList.bind(this)}>增加</Button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // html格式输出： dangerouslySetInnerHTML={{__html: item}}
              return <li key={index} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
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

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    pageTitle: state.pageTitle
  }
}

// export default About
export default connect(mapStateToProps, null)(About)
