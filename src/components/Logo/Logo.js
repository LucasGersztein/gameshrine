import './Logo.css'
import logo from './assets/logo1.png'

const Logo = () => {
    return (
        <div>
            <img class='logo' src={logo} alt='logo'/>
        </div>
    )
}

export default Logo