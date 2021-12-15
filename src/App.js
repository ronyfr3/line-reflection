import React, { useState,useEffect } from "react";
import Table from "./components/Table";
import data from "./data/data.json";
import "./sass/main.scss";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("apiData")) {
      localStorage.setItem("apiData", JSON.stringify(data));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div className="app">{loading ? <div>Loading ... </div> : <Table />}</div>
  );
};

export default App;
