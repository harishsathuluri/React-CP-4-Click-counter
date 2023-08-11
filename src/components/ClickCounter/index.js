// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({count: this.prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="content-heading">
          {' '}
          The button has clicked <span className="count">{count} </span> times
        </h1>
        <p className="content-para">
          {' '}
          click the button to increase the count!{' '}
        </p>
        <button onClick={this.onClick} className="button1">
          Click me!
        </button>
      </div>
    )
  }
}
