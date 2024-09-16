import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './header.css';
import reactlogo from './assets/react.svg';


function Header(){

    function toggleMenu(){
        
    }

    return(
        <>
            <header>
                <div className="headerContainer">
                    <div className="headerContent">
                        <div className="headerLogo">
                            <img src={reactlogo} alt="logo" />
                        </div>
                        <nav className='navContainer'>
                            <ul className='navlinks'>
                                <li className='navlink'><a href="#">Dashboard</a></li>
                                <li className='navlink'><a href="#">All Paths</a></li>
                                <li className='navlink'><a href="#">Community</a></li>
                                <li className='navlink'><a href="#">Support us</a></li>
                                <li className='navlink'><a href="#">bell</a></li>
                                <li className='navlink'><a href="#">sun</a></li>
                                <li className='navlink'><a href="#">Profile</a></li>
                            </ul>
                        </nav>
                        <button onClick={toggleMenu} className="navMenuBtn"><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;