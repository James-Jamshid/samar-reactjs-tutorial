import "./app-info.scss"
const AppInfo = ({ allMoviesCount, favouriteMovies, likeMovies }) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>All movies: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Favourite movies: {favouriteMovies}</p>
      <p style={{ fontSize: 20, fontStyle: "oblique" }}>
        You liked {likeMovies} movies
      </p>
    </div>
    //inline css shunaqa yoziladi
  )
}
export default AppInfo
