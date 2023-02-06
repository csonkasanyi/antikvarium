import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Főoldal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/scifi">Sci-Fi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/humor">Humor</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar