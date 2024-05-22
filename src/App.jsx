import Nav from "./components/Nav";

const App = () => {
  const Styles = {
    app: `
      bg-[#3d3935]
      w-screen
      min-h-screen
      text-white
    `
  }
  
  return (
    <div className={Styles.app}>
      <Nav />
      <h1 className="pt-12">Hola mundo</h1>
    </div>
  )
}

export default App
