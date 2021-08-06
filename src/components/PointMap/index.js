import React from "react";
import "./styles.css";

export const PointMap = (props) => {
  return (
    <div className="PointMapDiv">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Preguntas</h5>
          <div className="container">
            <div className="row">
              {[...Array(props.amount)].map((e, index) => {
                let num = Number(index + 1);
                if (num <= Number(props.current)) {
                  return (
                    <div className="col-sm-4" key={index}>
                      <div className="mapItemContainer">
                        <div className="text-center mapItem mapItemDone">
                          <div className="">
                            <span>{num}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  if (num == Number(props.current)+1) {
                    return (
                      <div className="col-4" key={index}>
                        <div className="mapItemContainer">
                          <div className="text-center mapItem mapItemCurrent">
                            <div className="">
                              <span>{num}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-4" key={index}>
                        <div className="mapItemContainer">
                          <div className="text-center mapItem mapItemMissing">
                            <div className="">
                              <span>{num}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
