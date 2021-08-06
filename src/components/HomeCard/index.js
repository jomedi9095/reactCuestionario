import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";
import { useData } from "../../context/DataContext";
export const HomeCard = () => {
  const{SetCurrentUser, setDone, setIndexQuestion}=useData();
  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState({ name: "", lastName: "" });
  const history=useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name!="" && user.lastName!=""){
      SetCurrentUser(user);
      history.push("/preguntas")
    }else{
      setAlert(true);
      setTimeout(()=>{
        setAlert(false)
      }, 3000)
    }
  };
  useEffect(()=>{
    SetCurrentUser({name: "", lastName: ""})
    setDone(false)
    setIndexQuestion(0)
  },[])
  return (
    <div className="HomeCardDiv">
      <div className="card Show p-0">
        <div className="card-header">
          <h5>Formulario</h5>
        </div>
        <div className="card-body">
          <div className="container">
            <form className="mt-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
                <label htmlFor="lastname">Digite su Nombre</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
                <label htmlFor="lastname">Digite su Apellido</label>
              </div>
              <button
                type="submit"
                className="btn btn-success mt-4 p-2 w-100"
                onClick={handleSubmit}
              >
                Iniciar cuestionario
              </button>
            </form>
            {alert && (
              <div className="alert-danger alert mt-4">
                Recuerda que debes completar ambos campos
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
