import './App.css'
import Events from './components/Events'
//2 importando componente
import FirstComponent from './components/FirstComponents'
import MyComponent from './components/MyComponent'

//4 template Expression
import TemplateExpression from './components/TemplateExpression'

function App() {

  return (
    <>
    {/*3 comentarios jsx */}
    <h1>Fundamentos do React</h1>
     <FirstComponent/>
     <TemplateExpression/>
     <MyComponent/>
     <Events/>
    </>
  )
}

export default App
