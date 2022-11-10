import React from "react"
import "./movies-add-form.css"
import { v4 as uuidv4 } from "uuid"
class MoviesAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "", //+8210
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
            placeholder='How many watched'
          />
          <button type='submit' className='btn btn-outline-dark'>
            Add
          </button>
        </form>
      </div>
    )
  }

  // const MoviesAddForm = () => {
  //   return (
  //     <div className='movies-add-form'>
  //       <h3> Add new movie</h3>
  //       <form className='add-form d-flex'>
  //         <input
  //           type='text'
  //           className='form-control new-post-label'
  //           placeholder='which movie?'
  //         />
  //         <input
  //           type='number'
  //           className='form-control new-post-label'
  //           placeholder='How many watched'
  //         />
  //         <button type='submit' className='btn btn-outline-dark'>
  //           Add
  //         </button>
  //       </form>
  //     </div>
  //   )
}
export default MoviesAddForm
