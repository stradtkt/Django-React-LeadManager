import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary">
                <a className="navbar-brand text-white" href="#">Lead Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link text-white" href="">Home</a>
                        <a href="" className="nav-item nav-link text-white">Leads</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
