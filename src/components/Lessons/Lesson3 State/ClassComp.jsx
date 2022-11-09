import React from "react"
class Guest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      age: "",
    }
  }
  inc = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))
  }
  dec = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }))
  }
  restart = () => {
    this.setState({
      counter: 0,
    })
  }
  handleChange = (e) => {
    this.setState({
      age: e.target.value,
    })
  }
  render() {
    const { firstname, lastname } = this.props
    const { age, counter } = this.state
    return (
      <div>
        <h1>name:{firstname}</h1>
        <h1>lastname: {lastname}</h1>
        <h5>Input value {age}</h5>
        <h5>count {counter}</h5>
        <button onClick={this.inc}>add</button>
        <button onClick={this.dec}>remove</button>
        <button onClick={this.restart}>clear</button>
        <form action=''>
          <span>enter value:</span>
          <input type='text' onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const User = () => {
  return (
    <div>
      <Guest firstname='Jamshid' lastname='Makhmudov' />
      <Guest firstname='Sevara' lastname='Makhmudova' />
    </div>
  )
}
export default User
