//bu darsda organgan narsalarim:
//1.componentlarni ochish; 2.ularni 2xil export qilish; 3.ularni distrubtizatsiya qilsh;
//4ozgaruvchi ochib uni compponent ichida gullik qav bilan ishlatish
//5.funckisya ochish, arrow functionda returnni qachon ishlatish va qachon ishlatmasa ham bolishi
//6.funksiyani parametrlarini ham componentga yuborish; componentga funcsiya jonatish;
//7.objectlarni props qilib jonatib bomasligini anglab yetish
//8.2ta yani true va false sintaksisi ishlatilganda   terminalniy operator qilish

import { Container } from "./Style"

const Header = () => {
  const greet = "Hello"
  const name = "Jamshid"

  const getText = (greet, name) => {
    return (
      <div>
        <h1>welcome</h1>
        <h5>
          {greet} {name}
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste
          saepe fuga modi non eligendi aliquid. Repellendus non nostrum
          blanditiis.
        </p>
      </div>
    )
  }
  return <h1>{getText(greet, name)}</h1>
}

const Field = () => {
  const inputType = "text"
  const placeholder = "typing..."
  return <input type={inputType} placeholder={placeholder} />
}
const Button = () => {
  const isLogin = false

  return <button>{isLogin ? "logout" : "login"}</button>
  //bu sintaksis terminalniy operator deyiladi
}

const Lesson1 = () => {
  return (
    <Container>
      <Header />
      <div>
        <Field />
        <Button />
      </div>
    </Container>
  )
}
export default Lesson1
