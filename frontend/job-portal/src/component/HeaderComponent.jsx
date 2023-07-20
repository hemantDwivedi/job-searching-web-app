import './css/Color.css'
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark custom-purple-color">
                <div className="container-fluid mx-2 py-1">
                    <a className="navbar-brand">JobPortal</a>
                    <div className="justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/jobs' className="nav-link text-light mx-4">Jobs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/join-community' className="nav-link text-light">Join Community</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/register' className="nav-link text-light mx-4">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link text-light">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default HeaderComponent; 