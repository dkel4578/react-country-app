import React, { useContext } from "react";
import Header from "../components/Header";
import { useState, useEffect } from 'react'
import {Context} from '../components/Context'

function Home(props) {

  const {data, country, handleCountryChange, handleCountrySearch} = props
  const {darkmode} = useContext(Context);
  return (
    <div className="allContry">
      <form onSubmit={handleCountrySearch}>
      <div className="searchBox">
        <input
          className={darkmode ? 'darkmode searchBar' : "searchBar"}
          type="search"
          placeholder="country name..."
          onChange={handleCountryChange}
          required
          value={country}
        ></input>
        <button className={ darkmode? 'darkmode btn searchBtn' : "btn searchBtn"} type="submit">search</button>
      </div>
      <div className="countryBox">
        {
          data.length > 0 ? (data.map((item, i) => {
            return(
              
              <div key={i} className={darkmode ? 'country darkmode' : "country"}>
                <a href={`/detail/${i}`}>
                <div><img src={item.flags.png} className="countryFlg"/></div>
                <p>국가명 : {item.name.common}, {item.translations.kor.common}</p>
                <p>인구 : {(item.population).toLocaleString()} 명</p>
                <p>지역 : {item.region}</p>
                <p>수도명 : {item.capital ? item.capital : '없음'} </p>
                </a>
              </div>
              
            )
          })
        ) : (<h1 className="noDataMessage">검색 결과가 존재하지 않습니다.</h1>)}
      </div>
      </form>
    </div>
  );
}

export default Home;
