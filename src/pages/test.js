import React from "react";
import { Navbar, QuestionBox, ProgressBar, PointMap } from "../components";
const Test = () => {
  return (
    <div>
      <Navbar />
      <div className="container pt-3 mt-5 Show">
        <div className="row p-0">
          <div className="col-md-12">
            <QuestionBox />
          </div>
          <div className="p-0 mt-3">
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
