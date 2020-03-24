import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
/** @jsx h */

let host = "https://data.irozhlas.cz/korona-anketa-olympiada";
if (window.location.hostname === "localhost") {
  host = "http://localhost/korona-anketa-olympiada";
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={host + "/foto/" + el.f} alt={el.p} />
          <div className={el.o == "NE" && el.o0 =="NE" ? "bio cervene" : el.o == "ANO" && el.o0 == "ANO" ? "bio zelene" :"bio"}>
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.s.length > 0 ? el.s : ""}</div>
          </div>
          <div className="odpoved">{el.o ? el.o : "bez odpovědi"}</div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", host + "/data/data.json");
r.send();