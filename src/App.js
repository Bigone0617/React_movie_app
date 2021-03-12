import PropTypes from "prop-types";

const itemList = [
  {
    id : 1,
    name : "kimchi"
  },
  {
    id : 2,
    name : "ramen"
  },
  {
    id : 3,
    name : "bulgogi"
  },
  {
    id : 4,
    name : "pizza"
  },
  {
    id : 5,
    name : "coffee"
  }
];

function Food({name}) {
  return <h1>I like {name}!</h1>
};

// 필수값 체크, 형식체크
Food.propTypes = {
  name: PropTypes.string.isRequired
}

function App() {
  return (
    <div className="App">
      {
        itemList.map(item => {
          return <Food key={item.id} name={item.name}/>
        })
      }
    </div>
  );
};

export default App;
