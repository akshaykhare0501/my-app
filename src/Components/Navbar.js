import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [result, setResult] = useState('');
    // const [text, setText] = useState('');

    // useEffect(() => {
    //     // Set the text from the imported content
    //     setText(textContent);
    //   }, []);


    // const handleSearch = () => {
    //   if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
    //     setResult(`Found: "${searchTerm}" in the text.`);
    //     alert("text found");
    //   } else {
    //     setResult(`"${searchTerm}" not found.`);
    //     alert("text not found");
    //   }
    // };

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li> 
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutTextUtils}</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTextUtils: PropTypes.string
}
//title: PropTypes.string.isRequired  --> This will work as default Props are already set. If you comment out default props and don't pass title in app.js then you will see error in the console.

Navbar.defaultProps = {
    title: "Enter Title here",
    aboutTextUtils: 'About Text Utilizer'
}