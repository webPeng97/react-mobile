import React, { Component, Fragment  } from 'react'
import '@scss/doctorList.scss'
import bg from '@img/bg.png'
import light from '@img/light.png'
import hospital from '@img/hospital.png'
import label from '@img/label.png'

import { getRoleList } from '@/api'

class DoctorList extends Component {
  state = {
    selectVal: '请选择',
    inputVal: '',
    subscribe: false
  }
  async componentDidMount () {
    let res = await getRoleList()
    console.log(res)
  }
  render () {
    return (
      <Fragment>
        <div className="my-doctor-wrapper">
          <div className="head-bg-img">
            <img src={bg} alt=""/>
            <div className="text">
              <p>我的医生</p>
              <img src={light} alt=""/>
            </div>
          </div>
          <div className="content">
            <div className="operating-wrap">
              <div className="select-box">
                <select value={this.state.selectVal} onChange={(event) => this.handleSelectChange(event)}>
                  <option value="all">全部</option>
                  <option value="grapefruit">葡萄柚</option>
                  <option value="lime">酸橙</option>
                  <option value="coconut">椰子</option>
                  <option value="mango">芒果</option>
                </select>
              </div>
              <div className="find">
                <input type="text" placeholder="请输入医生姓名" value={this.state.inputVal} onChange={this.handleInputChange} />
                <div className="inquire"></div>
              </div>
            </div>
            <div className="module-wrap">
              <div className="warp">
                {/* <div>1111</div>
                <div>222</div> */}
                <div className="head-wrap">
                  <div className="title">
                    <img src={hospital} alt=""/>
                    上海市新华医院
                  </div>
                  <div
                    className={`subscribe ${ this.state.subscribe ? 'un-subscribe' : ''}`}
                    onClick={this.subscribeChange}>取消订阅</div>
                </div>
                <div className="content-wrap">
                  <ul className="text-content">
                    <li><b>姓名：</b>王大川</li>
                    <li><b>科室：</b>肿瘤科</li>
                    <li><b>职称：</b>副主任医师</li>
                  </ul>
                  <div className="push un-push">推&nbsp;送</div>
                </div>
                <div className="label-tips">
                  <img src={label} alt=""/>
                  标签：肺癌
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  handleSelectChange (event) {
    this.setState({selectVal: event.target.value})
  }

  handleInputChange = event => {
    this.setState({inputVal: event.target.value})
  }

  subscribeChange = () => {
    this.setState(state => ({
      subscribe: !state.subscribe
    }))
  }
}

export default DoctorList
