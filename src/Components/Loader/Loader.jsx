import React from "react";
import "./Loader.scss";
import Spinner from "../../Assets/Spinner.png";

function Loader({ isLoading }) {
  return (
    <div className={`loader ${isLoading && "loading"}`}>
      <div className='loader__container'>
        <img src={Spinner} alt='Spinner' className='loader__icon' />
        <p>MovieHub</p>
      </div>
    </div>
  );
}

export default Loader;
