// import data from "../Data/Data.js"
import MovieListItem from "../movie-list-item/MovieListItem"
import "./movie-list.css"
const MovieList = ({ data }) => {
  return (
    <ul className='movie-list'>
      {data.map((item) => (
        <MovieListItem
          // name={item.name}
          // viewers={item.viewers}
          // favourite={item.favourite}
          //korib turgan bosela componentni ichidagilarni itemga tenglam qayta qayta yozib chiqqanmiz shularni orniga, spread elementidan foydalanib interpolatsiya qilsak boladi.
          //masalan:
          {...item}
        />
      ))}
    </ul>
  )
}
export default MovieList
