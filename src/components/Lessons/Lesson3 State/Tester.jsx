import React from "react"
import "./Style.css"
import { v4 as uuidv4 } from "uuid"
////////////////////////////////////////////////////////////////////////////////////////////////////
class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      views: "",
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addFormHandler = (e) => {
    e.preventDefault()
    this.props.addForm({
      name: this.state.name,
      viewers: this.state.views,
      id: uuidv4(),
    })
    this.setState({
      name: "",
      views: "",
    })
  }

  render() {
    const { name, views } = this.state
    return (
      <div className='movies-add-form'>
        <h3> Add new movie</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandler}>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='which movie?'
            onChange={this.onChange}
            name='name'
            value={name}
          />
          <input
            type='number'
            className='form-control new-post-label'
            onChange={this.onChange}
            name='views'
            value={views}
          />
          <button type='submit' className='btn btn-outline-dark'>
            Add
          </button>
        </form>
      </div>
    )
  }
}
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
    this.setState((prevState) => {
      return {
        favourite: !prevState.favourite,
      }
    })
  }
  onFavourite = () => {
    this.setState((prevState) => {
      return {
        favourite: !prevState.favourite,
      }
    })
  }
  onLike = () => {
    this.setState((prevState) => {
      return {
        like: !prevState.like,
      }
    })
  }

  render() {
    const { name, viewers, onDelete } = this.props
    const { favourite, like } = this.state
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        }
        ${like && "like"}`}
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
            <button
              onClick={this.onFavourite}
              type='button'
              className='btn-cookie btn-sm'
            >
              <i className='fas fa-cookie'></i>
            </button>
            <button
              onClick={onDelete}
              type='button'
              className='btn-trash btn-sm '
            >
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

const Guest = ({ data, onDelete }) => {
  return (
    <div>
      {data.map((item) => (
        <User
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          onDelete={() => onDelete(item.id)}
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
  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, item],
    }))
  }
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }))
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <Guest data={data} onDelete={this.onDelete} />
        <AddForm addForm={this.addForm} />
      </div>
    )
  }
}
export default Tester
