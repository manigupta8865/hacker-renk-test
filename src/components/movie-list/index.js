import React, {Component}  from "react";
import "./index.css";

export default class Movielist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      result: []
    };
  }

  handleYearChange = (e) => {
    this.setState({selectedYear: e.target.value});
  }

  onClick = () => {
    // Code written in next line is to take care of adding active class to selected year for css purpose.
    this.resolveData(this.state.selectedYear);
  }

  resolveData = (year) =>  {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then((response) => response.json())
      .then(result => this.setState({
        result: result.data
      }));
  }
  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" onBlur={this.handleYearChange}/>
          <button className="" data-testid="submit-button" onClick={this.onClick} >Search</button>
        </section>
        {this.state.selectedYear && this.state.result.length > 0 &&
        <ul className="mt-50 styled" data-testid="movieList">
          {this.state.result.map((res, index) => {
                return (
                  <li className="slide-up-fade-in py-10" key={index + 1 }>{res.Title}</li>
                  );
                })    
              }
        </ul>
  }
  {this.state.selectedYear && this.state.result.length === 0 &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Movies found</div>}
      </div>
    );
  }
}

