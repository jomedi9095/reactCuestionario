import React from "react";
import "./styles.css";
import { useData } from "../../context/DataContext";
export const ProgressBar = () => {
  const { indexQuestion, amount, score, done } = useData();
  let percentage = (indexQuestion * 100) / amount;
  return (
    <div className="ProgressBarDiv">
      <div className="card">
        <div className="card-header">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        {done && (
          <div className="card-body">
            <h5>INFORMACIÓN</h5>
            <hr class="dropdown-divider"/>
            <h5>Respuestas correctas: {score}</h5>
            <h5>Respuestas incorrectas: {amount-score}</h5>
          </div>
        )}
      </div>
    </div>
  );
};
