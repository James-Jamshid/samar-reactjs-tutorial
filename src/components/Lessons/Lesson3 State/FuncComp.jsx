//Bu darsda organganlarim:
//1) 1ta component ga koplab datalarni props orqali  kiritib kop marotaba ishlatish
//2) 1ta component ga koplab datalarni props distrubtizatsiya qilib ya'ni gullik qavs ochib kop marotaba ishlatish
//3) jsxda props qilib object jonatib bolmaydi
//4) lineyni funksiyada {()=> ma'lumot} ozi bilan return keladi lekin ichiga gullik qavs ochse return yozishimiz shart:
//masalan: {()=>{return ma'lumot}}
//5) eng pastga tushilsa funcCom da fragment yozganman bu ortiqcha divlardan qutilish uchun ishlatiladi
import React, { Fragment } from "react"
class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      age: "",
    }
  }
  //1-yol
  // clickHandler = () => {
  //   this.setState({
  //     counter: this.state.counter + 1, // bu 1ta yoli lekin bunda counterni ishi sekinlashgani sari biz clickni yoqotib qoyamiz yani clikni bossak ham counter ozgarishga ulgurmagan bosa clik ishlamiy qoladi.

  //   })
  // }
  //2-yol
  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))
    //e'tirbor berilar funksiya arrow function bolishi kere.
    //agar oddiy bosa, pasda buttonga arrow functionni yozish kere boladi
  }
  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }))
  }
  restart = () => {
    this.setState({
      counter: 0,
    })
  }
  changeHandler = (e) => {
    this.setState({
      age: e.target.value,
    })
  }
  // changeHandler2 = (e, name) => {
  //   console.log(name)
  //   //tasavur qiling function ichidagi event 1tamas unga qoshimcha argumnet qoshmoqchi bolsak pastda inputga callback chaqirib
  //   //osha yerga argumentlarni yozsak boladi:
  //   this.setState({
  //     age: e.target.value,
  //   })
  // }
  render() {
    const { firstname, lastname, link, channel } = this.props
    const { age, counter } = this.state
    return (
      <div className='w-50 mx-auto'>
        <div className='border p-3 mt-5'>
          <h4>
            My name is {firstname}, my last name is {lastname}, my age:
            {age}
          </h4>
          <h5>this is my channel</h5>
          <a href={link}> {channel} channel</a>
          <div className='mt-3'>
            <button
              onClick={() => this.increment()}
              className='btn btn-success'
            >
              Increment
            </button>
            <button onClick={this.decrement} className='btn btn-danger mx-2'>
              Decrement
            </button>
            <button onClick={this.restart} className='btn btn-info'>
              Restart
            </button>
            <p>{counter}</p>
          </div>
          <form action=''>
            <span>Enter your age</span>
            <input
              type='text'
              className='form-control'
              onChange={this.changeHandler}
            />
            {/* <input
              type='text'
              className='form-control'
              onChange={(e) => this.changeHandler2(e, "Jamshid")}
            /> */}
          </form>
        </div>
      </div>
    )
  }
}
// import ClassComp from "./ClassComp"

const FuncComp = () => {
  return (
    <Fragment>
      <ClassComp
        // bu fragment ortiqcha divlardan qutilish uchun ishlatiladi.
        firstname='Jamshid'
        lastname='Makhmudov'
        link='youtube.com'
        channel='youtube'
      />
      <ClassComp
        firstname='Shohrux'
        lastname='Mustafo'
        link='youtube.com'
        channel='instagram'
      />
    </Fragment>
  )
}
export default FuncComp
