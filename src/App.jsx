import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import {Context} from './components/Context';
import Header from "./components/Header";
import "./App.css";


function App() {
  const url = `https://restcountries.com/v3.1/all`;
  const [data, setData] = useState([]);
  const [allData, setAlldata] = useState([]);
  const [country, setCountry] = useState("");
  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlldata(data);
          setData(data);
      });
  };
  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleCountrySearch = (e) => {
    e.preventDefault();
    const searchedCountry = allData.filter((item) => {
      return(
      ((item.name.common).toLowerCase()).includes(country.toLowerCase())
      )
    });
    console.log('검색됨', searchedCountry)
   
    setData(searchedCountry);
    setCountry("");
  };
  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () =>{
    setDarkmode(!darkmode);
  }
  return (
    <div className={ darkmode ? 'darkmode App' : "App"}>
    <Context.Provider value={{darkmode, setDarkmode, handleDarkmode}}>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              country={country}
              handleCountryChange={handleCountryChange}
              handleCountrySearch={handleCountrySearch}
            />
          }
        />
        <Route path="/detail/:i" element={<Detail data={data} />} />
      </Routes>
    </Context.Provider>
    </div>
  );
}

export default App;
