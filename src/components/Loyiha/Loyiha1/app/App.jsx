//Muteable va immutable mavzularmi yani muteable ozgaruvchi, immutable ozgarmas degani
import React from "react"
import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList"
import MoviesAddForm from "../movies-add-form/MoviesAddForm"
import SearchPanel from "../search-panel/SearchPanel"
import { v4 as uuidv4 } from "uuid"
import "./app.scss"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: "Empire of Osman",
          viewers: 989,
          favourite: false,
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 799,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Omar Hayyam",
          viewers: 1000,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    }
  }
  onDelete = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((c) => c.id === id)
      // data.splice(index, 1) // bu orqali togridan togri ya'ni muteable qilib  ochirishga harakat qilindi lekin bu xato
      //reactda bunday qilib bolmaydi bu javascriptmas
      // const newArr = data.filter((c) => c.id !== id) // buni qisqa qilib yozib olsa boladi yani:
      return {
        data: data.filter((c) => c.id !== id),
      }
    })
  }

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    }
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like)
      case "mostViewers":
        return arr.filter((c) => c.viewers > 800)
      default:
        return arr
    }
  }
  updateTermHandler = (term) => this.setState({ term })

  updateFilterHandler = (filter) => this.setState({ filter })

  render() {
    const { data, term, filter } = this.state
    const allMoviesCount = data.length
    const favouriteMovies = data.filter((c) => c.favourite).length
    const likeMovies = data.filter((c) => c.like).length
    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    )
    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMovies={favouriteMovies}
            likeMovies={likeMovies}
          />
          <div className='search-panel'>
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter
              filter={filter}
              updateFilterHandler={this.updateFilterHandler}
            />
          </div>
          <MovieList
            data={visibleData}
            onDelete={this.onDelete}
            onToggleProp={this.onToggleProp}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }

  // const App = () => {
  //   const data = [
  //     { name: "Empire of Osman", viewers: 989, favourite: false, id: 1 },
  //     { name: "Ertugrul", viewers: 899, favourite: false, id: 2 },
  //     { name: "Ertugrul", viewers: 899, favourite: false, id: 3 },
  //   ]
  //   const onDelete = (id) => {
  //     console.log(id)
  //   }
  //   return (
  //     <div className='app font-monospace'>
  //       <div className='content'>
  //         <AppInfo />
  //         <div className='search-panel'>
  //           <SearchPanel />
  //           <AppFilter />
  //         </div>
  //         <MovieList data={data} onDelete={onDelete} />
  //         <MoviesAddForm />
  //       </div>
  //     </div>
  //   )
}
export default App
