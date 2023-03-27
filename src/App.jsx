import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// import React from "react";
// import './App.css'

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <div className="App sticky-top">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/:id" element={ <Details />} />

        <Route path="/episode" element={ <Episode />} />
        <Route path="/episode/:id" element={ <Details />} />

        <Route path="/location" element={ <Location />} />
        <Route path="/location/:id" element={ <Details />} />
      </Routes>
    </Router>

  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let { info, results } = fetchedData;           //destructuring data 
  // console.log(info);

  // console.log(fetchedData.info);
  // console.log(fetchedData.results);     //to get individual data from an object

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;  //data retrieval API   //making it into template literals rather than maing it into string

  useEffect(() => {

    (async function () {                                              // await is used to tell javascript to wait until data fetching from api
      let data = await fetch(api).then(res => res.json())
      // console.log(data);                                                           //to convert raw data into json format we use then keyword   respone json
      updateFetchedData(data);
    })();                                                            // iife=Immediately Invoked function expression (function(){})();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Here's the Details of all<span className="text-primary"> Anime Character's</span>
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          {/* <div className="col-3"> */}
          <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
          {/* </div> */}
          <div className="col-8">
            <div className="">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App
