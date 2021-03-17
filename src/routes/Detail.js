import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;

        // url을 바로 치고 들어오는 경우 state가 비어있으므로, Home으로 다시 보냄
        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        return (
            <div className="Detail_main">
                <div 
                    className = "Detail_container"
                    style = {{
                        backgroundImage: `url(${location.state.poster})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                    {location.state.title}
                </div>
                <div>
                    <h5>{location.state.summary}</h5>
                </div>
            </div>
            
        );
    }
}

export default Detail;