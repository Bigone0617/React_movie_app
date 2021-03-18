import axios from "axios";
import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    state = {
        movie:{}
    }

    getMovieDetail = async(location) => {
        const {
            data : {
                data : {movie}
            }
        } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${location.state.id}&with_images=true`);

        this.setState({movie});
    }

    componentDidMount(){
        const {location, history} = this.props;

        this.getMovieDetail(location);

        // url을 바로 치고 들어오는 경우 state가 비어있으므로, Home으로 다시 보냄
        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        const {movie} = this.state;
        
        return (
            <div className="Detail_main">
                {movie === {} 
                    ? (<div>Loading...</div>)
                    : (
                    <>
                        <div 
                            className = "Detail_container"
                            style = {{
                                backgroundImage: `url(${movie.large_screenshot_image1})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}>
                            <h1>{location.state.title}</h1>
                        </div>
                        <div>
                            <ul>
                                {location.state.genres.map((genre, index) => (
                                    <li key={index}>
                                        {genre}
                                    </li>
                                ))}
                            </ul>
                            <h5>{location.state.summary}</h5>
                        </div>
                    </>
                    )
                }
            </div>
            
        );
    }
}

export default Detail;