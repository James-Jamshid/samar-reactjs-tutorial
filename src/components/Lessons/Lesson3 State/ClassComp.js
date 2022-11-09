import React from "react"
class ClassComp extends React.Component {
  render() {
    const { firstname, lastname, link, channel } = this.props
    return (
      <div>
        <h1>
          My name is {firstname}, my last name is {lastname} and this is my
          channel
        </h1>
        <a href={link}> {channel} channel</a>
      </div>
    )
  }
}
export default ClassComp
