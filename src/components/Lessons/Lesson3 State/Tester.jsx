import React from "react"
////////////////////////////////////////////////////////////////////////////////////////////////////
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favourite: false,
      like: false,
    }
  }
  onFavourite = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }))
  }
  onLike = () => {
    this.setState((prevState) => ({
      like: !prevState.like,
    }))
  }
  render() {
    const { name, viewers } = this.props
    const { favourite, like } = this.state
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        } ${like && "like"} `}
        //bu favourite clasini qoshishni bitta yoli yana 1ta yoli bor
      >
        <span onClick={this.onLike} className='list-group-item-label'>
          {name}
        </span>
        <input
          type='number'
          className='list-group-item-input'
          defaultValue={viewers}
        />

        <div className='d-flex justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
            <button type='button' className='btn-cookie btn-sm'>
              <i onClick={this.onFavourite} className='fas fa-cookie'></i>
            </button>
            <button type='button' className='btn-trash btn-sm '>
              <i className='fas fa-trash'></i>
            </button>
            <i className='fas fa-star'></i>
          </div>
        </div>
      </li>
    )
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const Guest = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <User
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
        />
      ))}
    </div>
  )
}
////////////////////////////////////////////////////////////////////////////////////////////////////
class Tester extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Empire of Osman", viewers: 989, favourite: false, id: 1 },
        { name: "Ertugrul", viewers: 899, favourite: false, id: 2 },
        { name: "Omar", viewers: 899, favourite: false, id: 3 },
      ],
    }
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {/* <User /> */}
        <Guest data={data} />
      </div>
    )
  }
}
export default Tester
