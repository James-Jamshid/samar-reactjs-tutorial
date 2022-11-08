import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList"
import MoviesAddForm from "../movies-add-form/MoviesAddForm"
import SearchPanel from "../search-panel/SearchPanel"
import "./app.css"

const App = () => {
  const data = [
    { name: "Empire of Osman", viewers: 989, favourite: false },
    { name: "Ertugrul", viewers: 899, favourite: false },
    { name: "Omar", viewers: 999, favourite: true },
  ]
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo />
        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  )
}
export default App
