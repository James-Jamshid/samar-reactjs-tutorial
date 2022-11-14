// import data from "../Data/Data.js"
import MovieListItem from "../movie-list-item/MovieListItem"
import "./movie-list.css"
const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className='movie-list'>
      {data.map((item) => (
        <MovieListItem
          key={item.id} // key value doim bolishi kere maping qilganda
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          like={item.like}
          //korib turgan bosela componentni ichidagilarni itemga tenglam qayta qayta yozib chiqqanmiz shularni orniga, spread elementidan foydalanib interpolatsiya qilsak boladi.
          //masalan:
          // {...item}
          onDelete={() => onDelete(item.id)}
          onToggleProp={(e) =>
            onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
        />
      ))}
    </ul>
  )
}
export default MovieList
