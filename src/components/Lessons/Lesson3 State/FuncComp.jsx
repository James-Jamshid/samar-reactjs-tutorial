//Bu darsda organganlarim:
//1) 1ta component ga koplab datalarni props orqali  kiritib kop marotaba ishlatish
//2) 1ta component ga koplab datalarni props distrubtizatsiya qilib ya'ni gullik qavs ochib kop marotaba ishlatish
//3) jsxda props qilib object jonatib bolmaydi
//4) lineyni funksiyada {()=> ma'lumot} ozi bilan return keladi lekin ichiga gullik qavs ochse return yozishimiz shart:
//masalan: {()=>{return ma'lumot}}
import React from "react"
class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  //1-yol
  // clickHandler = () => {
  //   this.setState({
  //     counter: this.state.counter + 1, // bu 1ta yoli lekin bunda counterni ishi sekinlashgani sari biz clickni yoqotib qoyamiz yani clikni bossak ham counter ozgarishga ulgurmagan bosa clik ishlamiy qoladi.

  //   })
  // }
  //2-yol
  clickHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }))
  }
  render() {
    const { firstname, lastname, link, channel } = this.props
    return (
      <div className='w-50 mx-auto'>
        <div className='border p-3 mt-5'>
          <h4>
            My name is {firstname}, my last name is {lastname} and this is my
            channel
          </h4>
          <a href={link}> {channel} channel</a>
          <div className='mt-3'>
            <button onClick={this.clickHandler} className='btn btn-success'>
              Increment
            </button>
            <button onClick={this.clickHandler} className='btn btn-danger mx-2'>
              Decrement
            </button>
            <button onClick={this.clickHandler} className='btn btn-info'>
              Restart
            </button>
            <p>{this.state.counter}</p>
          </div>
        </div>
      </div>
    )
  }
}
// import ClassComp from "./ClassComp"

const FuncComp = () => {
  return (
    <div>
      <ClassComp
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
    </div>
  )
}
export default FuncComp
