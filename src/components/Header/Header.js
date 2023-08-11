import './Header.scss'
import {Link} from 'react-router-dom';
import logo from "../../assets/images/logo.jpg"
import plusIcon from "../../assets/icons/plus1.png"

const Header = () => {
    return (
        <header className="app-header">
            <img 
                src={logo} 
                alt="logo for Taskfusion" 
                className="main-logo"
            />

            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item'>
                        <Link
                            to="/prioritylist"
                            className='nav__link'
                        >
                        Daily
                        </Link>
                    </li>

                    <li className='nav__list-item'>
                        <Link
                            to="/prioritylist"
                            className='nav__link'
                        >
                        Priority
                        </Link>
                    </li>

                    <li className='nav__list-item'>
                        <Link
                            to="/form"
                            className='nav__link'>
                            <img 
                                src={plusIcon} 
                                alt="plus icon" 
                                className="plus-icon"
                            />
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;