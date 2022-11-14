import "./movie-list-item.css"
// import React from "react"
// class MovieListItem extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // favourite: false,
//       // like: false,
//     }
//   }
//   // onFavourite = () => {
//   //   this.setState(({ favourite }) => ({
//   //     favourite: !favourite,
//   //   }))
//   // }
//   // onLike = () => {
//   //   this.setState(({ like }) => ({
//   //     like: !like,
//   //   }))
//   // }

//   render() {
//     const { name, viewers, onDelete, onToggle, favourite, like } = this.props
//     // const { favourite, like } = this.state

//     return (
//       <li
//         className={`list-group-item d-flex justify-content-between ${
//           favourite && "favourite"
//         } ${like && "like"}`}
//         //bu favourite clasini qoshishni bitta yoli yana 1ta yoli bor
//       >
//         <span
//           onClick={onToggle}
//           className='list-group-item-label'
//           data-toggle='like'
//         >
//           {name}
//         </span>
//         <input
//           type='number'
//           className='list-group-item-input'
//           defaultValue={viewers}
//         />
//         <div className='d-flex justify-content-center align-items-center'>
//           <div className='d-flex justify-content-center align-items-center'>
//             <button
//               onClick={onToggle}
//               type='button'
//               className='btn-cookie btn-sm'
//               data-toggle='favourite'
//             >
//               <i className='fas fa-cookie'></i>
//             </button>
//             <button type='button' className='btn-trash btn-sm '>
//               <i onClick={onDelete} className='fas fa-trash'></i>
//             </button>
//             <i className='fas fa-star'></i>
//           </div>
//         </div>
//       </li>
//     )
//   }

const MovieListItem = (props) => {
  // let className = `   list-group-item d-flex justify-content-between`
  // if (props.favourite) {
  //   className += "favourite"
  // }
  // favouriteni qoshishni yana 1ta yoli if statement orqali
  const { name, viewers, onDelete, onToggleProp, favourite, like } = props

  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      } ${like && "like"}`}
      //bu favourite clasini qoshishni bitta yoli yana 1ta yoli bor
    >
      <span
        className='list-group-item-label'
        onClick={onToggleProp}
        data-toggle='like'
      >
        {name}
      </span>
      <input
        type='number'
        className='list-group-item-input'
        defaultValue={viewers}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-cookie btn-sm'
            onClick={onToggleProp}
            data-toggle='favourite'
          >
            <i className='fas fa-cookie'></i>
          </button>
          <button type='button' className='btn-trash btn-sm '>
            <i onClick={onDelete} className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </div>
    </li>
  )
}
export default MovieListItem
