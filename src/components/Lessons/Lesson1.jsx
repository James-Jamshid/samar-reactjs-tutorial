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
