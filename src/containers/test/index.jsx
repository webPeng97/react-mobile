// import { Button } from 'antd-mobile'
import React, { Component, Fragment  } from 'react'
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../store/actions.js'
import { List, Button } from 'antd-mobile';
const Item = List.Item;

class Test extends Component {

  componentDidMount () {
    document.title = 'Test'
    console.log('this.props1', this.props)
    let { setPageTitle, setInfoList } = this.props // es6 解构赋值
    
    // 触发setPageTitle action
    setPageTitle('这是修改redux中pageTitle的值')
    
    // 触发setInfoList action
    setInfoList()
  }

  render () {
    console.log('this.props2', this.props)
    // 从props中解构store
    let { pageTitle, infoList } = this.props
    
    // 使用store
    return (
      <Fragment>
        <h1>{pageTitle}</h1>
        <Button onClick={() => {this.props.history.push('/about')}}>About</Button>
        <Button onClick={() => {this.props.history.push('/topics')}}>Topics</Button>
        {
            infoList.length > 0 ? (
                <List renderHeader={() => '后台数据列表'} className="my-list">
                    {
                      infoList.map(item => {
                          return (
                            <Item extra={item.id} key={item.id}>{item.name}</Item>
                          )
                      })
                    }
                </List>
            ):null
        }
      </Fragment>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    setInfoList (data) {
        dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
