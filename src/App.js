function Food({fav}) {
  return <h1>I like {fav}!</h1>
}

function App() {
  return (
    <div className="App">
      <h1>aaa</h1>
      <Food fav="kimchi"/>
    </div>
  );
}

export default App;
