const Hello = () =>{
  return <h1>Hello world</h1>
}

//components
const App = () => {
  return  (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;