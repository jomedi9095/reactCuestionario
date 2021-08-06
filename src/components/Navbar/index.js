import React from "react";
import "./styles.css";
import { useData } from "../../context/DataContext";
import { useHistory } from "react-router";
export const Navbar = () => {
  const { currentUser, SetCurrentUser, setIndexQuestion, setScore, setDone } = useData();
  const history = useHistory();
  return (
    <div className="NavbarDiv">
      <nav className="navbar navbar-expand-lg navbar-dark p-0">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!currentUser.name != "" ? (
                <li className="nav-item ps-5 pe-5 pt-3 pb-3 ms-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              ) : (
                <div className="greeting ms-3">
                  <span>Bienvenido:</span> {currentUser.name}{" "}
                  {currentUser.lastName}
                </div>
              )}
            </ul>
          </div>
          {currentUser.name!="" && (
            <button
              className="btn-danger btn ps-5 pe-5 pt-4 pb-4 m-0"
              onClick={() => {
                SetCurrentUser({ name: "", lastName: "" });
                history.push("/");
                setIndexQuestion(0)
                setScore(0)
                setDone(false)
              }}
            >
              Salir
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
