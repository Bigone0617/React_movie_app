import React from "react";

class App extends React.Component{

  constructor(props){
    super(props);
  }

  state = {
    count : 0
  };

  //functions
  add = () => {
    console.log("plus");
    this.setState(current => ({
      count : current.count + 1
    }))
  };
  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }))
  };

  componentDidMount(){
    console.log("did mount");
  }
  componentDidUpdate(){
    console.log("update!!");
  }

  render() {
    console.log("render function")
    return (
      <div>
        <h1>this count is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
