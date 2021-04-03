import React from "react";
import "./Trendings.scss";

function Trendings() {
  return (
    <div className='trending'>
      <div className='trending__container'>
        <div className='trending__side'>
          <div className='trending__Day'>
            <select name='type'>
              <option value='all'>All</option>
              <option value='week'>Week</option>
            </select>
          </div>

          <div className='trending__media'>
            <select name='type'>
              <option value='movie'>Movie</option>
              <option value='tv'>Tv</option>
            </select>
          </div>
        </div>
        <div className='trending__content'>column two</div>
      </div>
    </div>
  );
}

export default Trendings;
