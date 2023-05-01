import React, {useState}  from "react";
import "./index.css";

 const Movielist = ()=>{
  const [inputData,setinputData]=useState("")
  const [movieData,setMovieData]
=useState([])
  const handleYearChange = (e) => {
    setinputData(e.target.value)
  }

  

  const resolveData = () =>  {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${inputData}`)
      .then((response) => response.json())
      .then(result => setMovieData(result.data));
  }
  console.log(movieData)

    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" value={inputData}  onChange={(e)=>handleYearChange(e)}/>
          <button className="" data-testid="submit-button" onClick={resolveData} >Search</button>
        </section>
        <ul className="mt-50 styled" data-testid="movieList">
          {movieData.length > 0 && movieData.map((res, index) => {
                return (
                  <li className="slide-up-fade-in py-10" key={index + 1 }>{res.Title}</li>
                  );
                })    
              }
        </ul>
  {inputData && movieData.length === 0 &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>}
      </div>
    );
}
export default Movielist;

