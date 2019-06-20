import React, { Component, Fragment } from 'react'

export default class List extends Component {
  // 不写也可以
  // constructor(props){
  //   super(props);
  //   this.state={
  //       list: []
  //   }
  // }

  render() {
    return (
      <Fragment>
        {
          this.props.list.map((item, index) => {
            return (
              <div className="list" key={index}>
                <img src={item.img} className="img" alt=""/>
                <div className="text-warpper">
                  <div className="title">{item.title}</div>
                  <div className="author">{item.author}</div>
                  <div className="time">{item.time}</div>
                  {
                    item.show ? <span>显示</span>: ''
                  }
                </div>
              </div>
            )
          })
        }
      </Fragment>
      
    )
  }
}

