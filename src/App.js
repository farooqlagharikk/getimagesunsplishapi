import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
function App() {
  const [fetchData, setfetchData] = useState([]);
  const getfetchData = () => {
      axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&&query=beautifull&client_id=XNIymQOmt0aJ7ojkkg7b8MX5OFS36k4cgkTluQN4IYY"
      )
      .then((Response) => {
        setfetchData(Response.data.results);
      });
  };
  
  return (
    <div>
   < Navbar button=""/>

      <div className="container my-2">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={getfetchData}>
              Get fetchDatas
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {
          fetchData.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src={value.urls.small} alt="Card fetchData cap" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App