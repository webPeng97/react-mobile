import { SearchBar, Carousel  } from 'antd-mobile'
import React, { Component, Fragment  } from 'react'
import Img01 from "../../assets/images/1.png"
import Img02 from "../../assets/images/2.png"
import Img03 from "../../assets/images/3.png"
import Img04 from "../../assets/images/4.png"

class Home extends Component {
  state = {
    data: [Img01, Img02, Img03, Img04],
    imgHeight: 176
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({
  //       data: ['1', '2', '3', '4'],
  //     })
  //   }, 100)
  // }

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
      </Fragment>
    )
  }
}

export default Home
