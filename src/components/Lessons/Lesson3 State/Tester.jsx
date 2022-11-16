import React from "react"
import "./Style.css"
import { v4 as uuidv4 } from "uuid"
////////////////////////////////////////////////////////////////////////////////////////////////////
class SearchPannel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: "",
    }
  }
  updateTermHandler = (e) => {
    const term = e.target.value
    this.setState({
      term,
    })
    this.props.updateTermHandler(term)
  }
  render() {
    return (
      <input
        onChange={this.updateTermHandler}
        value={this.state.value}
        type='text'
        className='form-control search-input'
        placeholder='Search movies...'
      />
    )
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const FilterBtn = () => {
  const btnArr = [
    { name: "all", label: "all movies" },
    { name: "popular", label: " most rated movies " },
    { name: "mostWatched", label: "most watched movies" },
  ]
  return (
    <div className='btn-group'>
      {btnArr.map((btn) => (
        <button className='btn btn-outline-dark' type='button'>
          {btn.label}
        </button>
      ))}
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      views: "",
    }
  }
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addFormHandler = (e) => {
    e.preventDefault()
    this.props.addForm({
      name: this.state.name,
      viewers: this.state.views,
    })
    this.setState({ name: "", views: "" })
  }

  render() {
    const { name, views } = this.state
    return (
      <div className='movies-add-form'>
        <h3> Add new movie</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandler}>
          <input
            onChange={this.changeInput}
            name='name'
            value={name}
            type='text'
            className='form-control new-post-label'
            placeholder='which movie?'
          />
          <input
            onChange={this.changeInput}
            name='views'
            value={views}
            type='number'
            className='form-control new-post-label'
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
    this.state = {}
  }
  render() {
    const { name, viewers, like, favourite, onToggle, onDelete } = this.props
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        } ${like && "like"} `}
      >
        <span
          onClick={onToggle}
          data-toggle='like'
          className='list-group-item-label'
        >
          {name}
        </span>

        <input
          defaultValue={viewers}
          type='number'
          className='list-group-item-input'
        />

        <div className='d-flex justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
            <button
              onClick={onToggle}
              data-toggle='favourite'
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

const Guest = ({ data, onToggle, onDelete }) => {
  return (
    <div>
      {data.map((item) => (
        <User
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggle={(e) =>
            onToggle(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
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
        {
          name: "Empire of Osman",
          viewers: 789,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 999,
          favourite: false,
          like: false,
          id: 2,
        },
        { name: "Omar", viewers: 599, favourite: false, like: false, id: 3 },
      ],
      term: "",
      filter: "",
    }
  }
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }))
  }
  onToggle = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    }
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }))
  }
  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1)
  }
  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like)
      case "mostWatched":
        return arr.filter((c) => c.viewers > 800)
      default:
        return arr
    }
  }
  updateTermHandler = (term) => {
    this.setState({ term })
  }
  render() {
    const { data, term, filter } = this.state
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    )
    return (
      <div>
        <SearchPannel updateTermHandler={this.updateTermHandler} />
        <FilterBtn />
        <Guest
          data={visibleData}
          onToggle={this.onToggle}
          onDelete={this.onDelete}
        />
        <AddForm addForm={this.addForm} />
      </div>
    )
  }
}
export default Tester
