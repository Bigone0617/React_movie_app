import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
  state = {
    isLoding: true,
    movies: []
  }

  getMovies = async() => {
    const {
          data : {
            data : {movies}
          }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

        this.setState({movies, isLoding : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className = "container">
        {isLoding  
          ? ( <div className = "loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className = "movies">
              {movies.map(current => {
                return <Movie 
                          key = {current.id}
                          id = {current.id} 
                          year = {current.year} 
                          title = { current.title} 
                          summary = {current.summary} 
                          poster = {current.medium_cover_image} 
                          genres = {current.genres}
                        />
              })}
            </div>
          )
        }
      </section>
    );
  }
}

export default App;
