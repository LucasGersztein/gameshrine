import './Navbar.css'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
                <Logo/>
            </Link>
          </div>
          <div className="Categories">
              <Link to='/category/juegos' className="Option">Juegos</Link>
              <Link to='/category/consolas' className="Option">Consolas</Link>
              <Link to='/category/accesorios' className="Option">Accesorios</Link>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar