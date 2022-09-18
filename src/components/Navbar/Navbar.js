import './Navbar.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <div>
                <Logo/>
            </div>
            <div class='botonera'>
                <Button label={'Consolas'} />
                <Button label={'Juegos'}/>
                <Button label={'Accesorios'}/>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default Navbar