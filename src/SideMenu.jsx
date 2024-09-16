import './sideMenu.css';
import reactlogo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArchway, faMessage, faHeart, faBell, faMoon, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function SideMenu(){
    return(
        <>
            <div className="sideMenu">
                <div className="sideMenuContainer">
                    <div className="sideMenuLogo">
                        <img src={reactlogo} alt="logo" />
                    </div>
                    <nav className='sideMenuNavContainer'>
                        <ul className='sideMenuNavLinks'>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faHouse} /> Dashboard</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faArchway} /> All Paths</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faMessage} /> Community</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faHeart} /> Support us</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faBell} /> Notifications</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faGear} /> Settings</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faMoon} /> Dark Mode</a></li>
                            <li className='sNavLink'><a href="#"><FontAwesomeIcon icon={faRightFromBracket} /> Sign Out</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideMenu;