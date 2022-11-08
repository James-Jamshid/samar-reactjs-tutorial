import "./movie-list-item.css"
const MovieListItem = (props) => {
  // let className = `   list-group-item d-flex justify-content-between`
  // if (props.favourite) {
  //   className += "favourite"
  // }
  // favouriteni qoshishni yana 1ta yoli if statement orqali
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        props.favourite && "favourite"
      }`}
      //bu favourite clasini qoshishni bitta yoli yana 1ta yoli bor
    >
      <span className='list-group-item-label'>{props.name}</span>
      <input
        type='number'
        className='list-group-item-input'
        defaultValue={props.viewers}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-cookie btn-sm'>
            <i className='fas fa-cookie'></i>
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
export default MovieListItem
