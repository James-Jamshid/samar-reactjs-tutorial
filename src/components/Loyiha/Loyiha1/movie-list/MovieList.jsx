import MovieListItem from "../movie-list-item/MovieListItem"
import "./movie-list.css"
const MovieList = () => {
  return (
    <div className='movie-list'>
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  )
}
export default MovieList
