import './App.css'
//2 css de componete
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  //4 inline css dinamico
  const n = 15;

  // 5 -classes dinamicas
  const redTitle = true;

  return (
    <>
      {/*1 CSS global */}
      <h1>CSS no react</h1>
      {/* 2 - css de componete */}
      <MyComponent />
      <p>Pegou o CSS do componete </p>
      {/* 3 - Inline style */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}>
        Este elemento tem estilo inline
      </p>
      {/* 4 - Inline style dinamico*/}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinamico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinamico 2
      </h2>
      {/*5- classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma classe
      </h2>
      {/*6- Css modules */}
       <Title/>
    </>
  )
}

export default App
