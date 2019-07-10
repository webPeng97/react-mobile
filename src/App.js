import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Test from './containers/test'
import Topics from './containers/topics/topics'
import Exercise from './containers/exercise'
import NoaMatch from './containers/404'
import './assets/scss/index.scss'

import { Provider } from 'react-redux'
import store from './store'

const routerList = [
  { path: "/exercise", name: "Exercise", component: Exercise },
  { path: "/about", name: "About", component: About },
  { path: "/test", name: "Test", component: Test },
  { path: "/topics", name: "Topics", component: Topics }
]

const App = () => (
  <Router>
    <div>
    <Provider store = {store}>
      <Switch>
        <Route exact path="/" component={Home}/>
        {
          routerList.map((item, index) => {
            return <Route key={index} path={item.path} render={props =>  <item.component {...props} />} />
          })
        }
        {/* <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/> */}
        <Route component={NoaMatch}/>
      </Switch>   
    </Provider>
    </div>
  </Router>
)

export default App
