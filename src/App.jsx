import React from "react";
import Navbar from "./components/Navbar";
import Rightsection from "./components/Rightsection";
import Mainsection from "./components/Mainsection";
import Leftsection from "./components/Leftsection";
const App = () => {
  return (
    <div className="container text-center">
      <Navbar />

      <div className="row">
        <div className="col-3">
          <Leftsection />
        </div>
        <div className="col-6 ">
          <Mainsection />
        </div>
        <div className="col-3">
          <Rightsection />
        </div>
      </div>
    </div>
  );
};

export default App;









