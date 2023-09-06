import React from 'react';
import "./index.css";
import Sdata from "./Sdata";
function Card(props)
{
  return(
    <>
      <div className="cards">
      <div className="card">

        <img src={props.imgsrc} alt="error" className="card_img" />

        <div className="card_info">

          <span className="card_category"> {props.title}</span>

            <h3 className="card_title"> {props.sname}</h3>

            <p className="card_rate">{props.rating}</p>

            <a href={props.link} target="_blank">

              <button>DOWNLOAD</button>
            </a>
      
        </div>
      </div>
      </div>
    {/* <input type="text" value="Search Movies"/> */}

  </>
  )
}
export default Card;