import "./app-filter.css"
const AppFilter = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-dark' type='button'>
        All movies
      </button>
      <button className='btn btn-outline-dark' type='button'>
        Most rated movies
      </button>
      <button className='btn btn-outline-dark' type='button'>
        Most watched movies
      </button>
    </div>
  )
}
export default AppFilter
