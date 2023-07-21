import './css/Color.css'
import { NavLink } from 'react-router-dom';

function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mt-3">
                    <h1 className="fs-4 custom-color-text p-4 mx-4"><strong className=''>JOB</strong>Portal</h1>
                    <div className="justify-content-center">
                        <ul className="navbar-nav px-5">
                            <li className="nav-item">
                                <NavLink to='/jobs' className="nav-link">Jobs</NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink to='/jobs' className="nav-link">Companies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/join-community' className="nav-link">Join Community</NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink to='/join-community' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/join-community' className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink to='/register' className="nav-link">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/login' className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default HeaderComponent; 