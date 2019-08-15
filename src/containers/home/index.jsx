import { SearchBar, Carousel, Tabs   } from 'antd-mobile'
import React, { Component, Fragment  } from 'react'
import { getRoleList } from '../../api'

import Img01 from "../../assets/images/1.png"
import Img02 from "../../assets/images/2.png"
import Img03 from "../../assets/images/3.png"
import Img04 from "../../assets/images/4.png"

const tabs = [
  { title: <span>最新</span> },
  { title: <span>专题</span> },
  { title: <span>寻味</span> },
  { title: <span>知识</span> }
]

class Home extends Component {
  state = {
    data: [Img01, Img02, Img03, Img04],
    imgHeight: 176,
    asyncList: []
  }

  componentDidMount () {
    getRoleList().then(res => {
      console.log(res.data)
      this.setState({
        asyncList: res.data
      })
    })
  }

  render () {
    return (
      <Fragment>
        <SearchBar placeholder="搜索香水、品牌、气味、帖子" maxLength={8} />
        {/* <Button onClick={() => {this.props.history.push('/about')}}>About</Button>
        <Button onClick={() => {this.props.history.push('/topics')}}>Topics</Button>
        <Button onClick={() => {this.props.history.push('/test')}}>Test</Button> */}
        {/* 使用Carousel 会出现如下错误：
          * [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>
          * 解决办法：* { touch-action: pan-y; }  使用全局样式样式去掉
          * https://www.jianshu.com/p/04bf173826aa
         */}
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="/"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // 防止窗口调整大小事件以改变高度
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className="latest">
            <div className="title">从开始你就赢了</div>
            <div className="text">最新</div>
          </div>
          <div className="monographic">
            专题
            {
              this.state.asyncList.map(item => {
                return (
                  <p key={item.id}>{ item.name }</p>
                )
              })
            }
          </div>
          <div className="ruminate">
            寻味
          </div>
          <div className="knowledge">
            知识
          </div>
        </Tabs>
      </Fragment>
    )
  }
}

export default Home
