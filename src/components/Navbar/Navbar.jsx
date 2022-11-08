import { Link } from "react-router-dom"
import { Container } from "./Style"

const Navbar = () => {
  return (
    <Container>
      <div>
        <Link to='/'>
          <button>main</button>
        </Link>
        <Link to='/lesson'>
          <button>lesson</button>
        </Link>
        <Link to='/lesson2'>
          <button>lesson2</button>
        </Link>
        <Link to='/loyiha'>
          <button>loyiha</button>
        </Link>
      </div>
    </Container>
  )
}
export default Navbar
