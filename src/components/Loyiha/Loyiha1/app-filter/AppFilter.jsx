import "./app-filter.css"
const AppFilter = ({ updateFilterHandler, filter }) => {
  const btnArr = [
    { name: "all", label: "   All movies" },
    { name: "popular", label: "  Most rated movies" },
    { name: "mostViewers", label: "    Most watched movies" },
  ]
  return (
    <div className='btn-group'>
      {btnArr.map((btn) => (
        <button
          className={`btn ${
            filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type='button'
          onClick={() => updateFilterHandler(btn.name)}
        >
          {btn.label}
        </button>
      ))}
      {/* <button className='btn btn-outline-dark' type='button'>
        Most rated movies
      </button>
      <button className='btn btn-outline-dark' type='button'>
        Most watched movies
      </button> */}
    </div>
  )
}

export default AppFilter
