import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white px-5 fs-4 fw-bold" href="www.google.com">Shivam Gaur</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="www.google.com">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="www.google.com">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white"  href="www.google.com">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
