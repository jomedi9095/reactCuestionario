import React, { useEffect, useState } from "react";
import "./styles.css";
import { useData } from "../../context/DataContext";
import { PointMap } from "..";
import { useHistory } from "react-router";
export const QuestionBox = (props) => {
  const {
    questions,
    indexQuestion,
    NextIndexQuestion,
    increaseScore,
    amount,
    done,
    setDone,
    currentUser,
    grade,
  } = useData();
  let temp = questions[0].options;
  temp.selected = false;
  const [currentQuestions, setCurrentQuestions] = useState(temp);
  const [finish, setFinish] = useState(false);
  const history = useHistory();
  let number = indexQuestion + 1;
  const handleChange = (index) => (e) => {
    try {
      let vec = [...currentQuestions];
      vec.map((e) => {
        return (e.selected = false);
      });
      vec[index].selected = !vec[index].selected;
      setCurrentQuestions(vec);
    } catch (error) {}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    currentQuestions.map((e) => {
      if (e.selected && e.value) {
        increaseScore(1);
      }
    });
    NextIndexQuestion();
    currentQuestions.map((e, index) => {
      document.getElementById(`radio${index}`).checked = false;
    });
    if (indexQuestion == amount - 1) {
      setFinish(true);
    }
  };
  useEffect(() => {
    if (currentUser.name == "" || currentUser.className == "") {
      history.push("/");
    }

    if (indexQuestion < amount) {
      let vec = questions[indexQuestion].options;

      vec.map((element) => {
        return (element.selected = false);
      });
      setCurrentQuestions(vec);
    }
  }, [indexQuestion]);
  return (
    <div className="QuestionBoxDiv">
      <div className="container p-0">
        <div className="row">
          <div className="card col-md-8 col-lg-9 p-0 ps-0">
            {!done ? (
              <div>
                {!finish ? (
                  <div>
                    <div className="card-header ">
                      <h5>
                        Pregunta numero {number} de {questions.length}
                      </h5>
                    </div>
                    <div className="card-body">
                      <div>{questions[indexQuestion].statement}</div>
                      <form>
                        {currentQuestions.map((e, index) => {
                          return (
                            <div key={index} className="d-flex">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                value={currentQuestions[index].value}
                                onChange={handleChange(index)}
                                id={"radio" + index}
                              ></input>
                              <p>{e.option}</p>
                            </div>
                          );
                        })}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Siguiente
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="container mt-5 d-flex justify-content-center">
                      <div>
                        <h5>Test completado</h5>
                        <button
                          className="btn btn-success p-2 mt-4 w-100"
                          onClick={() => {
                            setDone(true);
                          }}
                        >
                          Guardar y enviar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="container mt-5 pt-5 d-flex justify-content-center">
                  <div>
                    <h4>
                      Su nota fue de:{" "}
                      <span className="text-muted">{grade}</span>
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-4 col-lg-3 p-0">
            <div className=" m-md-0 mx-md-1">
              <PointMap amount={questions.length} current={indexQuestion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
