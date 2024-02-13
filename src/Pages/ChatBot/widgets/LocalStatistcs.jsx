import { useState, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";


const LocalStatistics = () => {

  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="stats">
      <div className="column-left">
        <p> Total Cases :</p>
        <p> New Cases :</p>
        <p> Recovered :</p>
        <p> Total Deaths :</p>
        <p> New Deaths :</p>
        <p> Hospitalized :</p>
      </div>
      {/* <div className="column-right"> */}
      {/* <ClipLoader color={"#fff"} loading={loading} /> */}
      {/* <p>{stats.local_total_cases}</p>
        <p>{stats.local_new_cases}</p>
        <p>{stats.local_recovered}</p>
        <p>{stats.local_deaths}</p>
        <p>{stats.local_new_deaths}</p>
        <p>{stats.local_active_cases}</p> */}
      {/* </div> */}
    </div>
  );
};


export default LocalStatistics;

