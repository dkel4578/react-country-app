import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {Context} from '../components/Context'
function Detail(props) {
  const params = useParams();
  const data = props.data;
  const {darkmode} = useContext(Context);
  const index = params.i;
  console.log(data[index]);
  return (
    <div className="detailBox">
      {data && (
        <>
        <h1>국가 상세 정보</h1>
        <h2>{data[index]?.cca2}</h2>
        <div className="detailContry">
          <div className="detailImgBox"><img src={data[index]?.flags.png} className="detailImg"/></div>
          <div className="detailContents">
          <p>국가명 : {data[index]?.name?.common}, {data[index]?.translations.kor.common}</p>
          <p>인구 : {(data[index]?.population)?.toLocaleString()} 명</p>
          <p>지역 : {data[index]?.region}</p>
          <p>수도 : {data[index]?.capital}</p>
          <p>세부 지역 : {data[index]?.subregion}</p>
          <p>영토 : {(data[index]?.area)?.toLocaleString()}km²</p>
          </div>
        </div>
        </>
      )}
      <div className="backBtnBox">
      <a href="/"><button className={darkmode ? 'darkmode btn backBtn' : "btn backBtn"}>back</button></a>
      </div>
    </div>
  );
}

export default Detail;
