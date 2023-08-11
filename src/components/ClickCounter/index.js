// Write your code here
import {components} from 'react'

class ClickCounter extends components {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({count: this.prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="content-heading">
          {' '}
          The button has clicked {count} times{' '}
        </h1>
        <p className="content-para"> click the button to increase the count </p>
        <button onClick={this.onClick} className="button1">
          {' '}
          click me!{' '}
        </button>
      </div>
    )
  }
}
