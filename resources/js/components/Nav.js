import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand text-dark" to="">Navbar</Link>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Start Nav Bar Left Items */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-dark"
                              to="#">
                                Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="#">Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-dark"
                              to="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                        >
                            Dropdown
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item text-dark" to="#">Action</Link>
                            <Link className="dropdown-item text-dark" to="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item text-dark" to="#">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="#">Disabled</Link>
                    </li>
                    <li className="nav-item">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success my-2 my-sm-0 text-dark" type="submit">Search</button>
                        </form>
                    </li>
                </ul>
            </div>

            {/* End Nav Bar Left Items */}

            {/* Start Nav Bar Right Items */}

                <div className="collapse navbar-collapse" id="navBarRightContents">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="#">Register</Link>
                        </li>
                    </ul>
                </div>

            {/* End Nav Bar Right Items */}

        </nav>
    )
}

export default Nav;
