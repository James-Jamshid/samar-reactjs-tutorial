//Muteable va immutable mavzularmi yani muteable ozgaruvchi, immutable ozgarmas degani
import React from "react"
import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList"
import MoviesAddForm from "../movies-add-form/MoviesAddForm"
import SearchPanel from "../search-panel/SearchPanel"

import "./app.css"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Empire of Osman", viewers: 989, favourite: false, id: 1 },
        { name: "Ertugrul", viewers: 899, favourite: false, id: 2 },
        { name: "Omar", viewers: 899, favourite: false, id: 3 },
      ],
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
    this.setState(({ data }) => ({
      data: [...data, item],
    }))
  }
  render() {
    const { data } = this.state
    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
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
