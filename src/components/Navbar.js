import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/">
            {" "}
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/male-pandit-working-on-laptop-2775580-2319301.png"
              alt="Logo"
              width="42"
              height="34"
              className="d-inline-block align-text-top"
            ></img>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input mx-3"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "this is title",
  about: "this is about",
};
