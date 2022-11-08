//Bu darsda organganlarim:
//1) 1ta component ga koplab datalarni props orqali  kiritib kop marotaba ishlatish
//2) 1ta component ga koplab datalarni props distrubtizatsiya qilib ya'ni gullik qavs ochib kop marotaba ishlatish
//3) jsxda props qilib object jonatib bolmaydi
//4) lineyni funksiyada {()=> ma'lumot} ozi bilan return keladi lekin ichiga gullik qavs ochse return yozishimiz shart:
//masalan: {()=>{return ma'lumot}}

const User = (props) => {
  //props orqali qilindi
  return (
    <div>
      <h1>
        My name is {props.firstname}, my last name is {props.lastname} and this
        is my channel
      </h1>
      <a href={props.link}> {props.channel} channel</a>
    </div>
  )
}
const User2 = ({ firstname, lastname, link, channel }) => {
  //distrubtizatsiya qilindi
  return (
    <div>
      <h1>
        My name is {firstname.name}, my last name is {lastname.last_name} and
        this is my channel
      </h1>
      <a href={link()}> {channel()} channel</a>
    </div>
  )
}

const Lesson2 = () => {
  return (
    <div>
      <div>Lesson2</div>
      <User
        firstname='Jamshid'
        lastname='Makhmudov'
        link='youtube.com'
        channel='youtube'
      />
      <User
        firstname='Shohrux'
        lastname='Mustafo'
        link='youtube.com'
        channel='instagram'
      />
      <User2
        firstname={{ name: "Ruxsora" }}
        lastname={{ last_name: "Makhmudova" }}
        link={() => "Youtube.com"} // link va channel bir xil
        channel={() => {
          return "instagram"
        }}
      />
    </div>
  )
}
export default Lesson2
