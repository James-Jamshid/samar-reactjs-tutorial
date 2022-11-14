import "./app-info.css"
const AppInfo = ({ allMoviesCount, favouriteMovies, likeMovies }) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>All movies: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Favourite movies: {favouriteMovies}</p>
      <p className='fs-4 text-uppercase'>You liked {likeMovies} movies</p>
    </div>
  )
}
export default AppInfo
